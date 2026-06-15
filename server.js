// 账号管理系统 v4.0 - 本地服务器（纯文件存储，无授权）
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const IS_PKG = typeof process.pkg !== 'undefined' || process.execPath.toLowerCase().includes('snapshot');
let APP_DIR;
if (IS_PKG) {
    APP_DIR = path.dirname(process.execPath) + '\\';
} else {
    APP_DIR = __dirname + '\\';
}
const DATA_DIR = path.join(APP_DIR, 'data');
const ACCOUNTS_FILE = path.join(DATA_DIR, 'accounts.json');
const BACKUP_DIR = path.join(DATA_DIR, 'backups');

app.use(cors());
app.use(express.json({ limit: '500mb' }));
app.use(express.static(path.join(APP_DIR, 'public')));

function ensureDirs() {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

function readData() {
    ensureDirs();
    try {
        if (fs.existsSync(ACCOUNTS_FILE)) {
            return JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));
        }
    } catch (e) {
        console.error('读取出错:', e.message);
    }
    return {};
}

function writeData(data) {
    ensureDirs();
    fs.writeFileSync(ACCOUNTS_FILE, JSON.stringify(data), 'utf8');
    console.log('数据已保存到 accounts.json');
}

function createBackup() {
    ensureDirs();
    try {
        const data = readData();
        const totalCount = Object.values(data).flat().length;
        if (totalCount === 0) return;
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupFile = path.join(BACKUP_DIR, 'backup-' + timestamp + '.json');
        fs.writeFileSync(backupFile, JSON.stringify(data, null, 2), 'utf8');
        const backups = fs.readdirSync(BACKUP_DIR).filter(f => f.startsWith('backup-')).sort().reverse();
        if (backups.length > 10) {
            backups.slice(10).forEach(f => fs.unlinkSync(path.join(BACKUP_DIR, f)));
        }
    } catch (e) { console.error('备份失败:', e.message); }
}

app.get('/api/accounts', (req, res) => {
    res.json({ success: true, data: readData() });
});

app.post('/api/accounts', (req, res) => {
    const { accountData } = req.body;
    if (!accountData) return res.status(400).json({ success: false, message: '数据为空' });
    writeData(accountData);
    createBackup();
    res.json({ success: true, message: '保存成功' });
});

const NAMES_FILE = path.join(DATA_DIR, 'status-names.json');

app.post('/api/status-names', (req, res) => {
    const { names } = req.body;
    if (!names || !Array.isArray(names) || names.length !== 12) {
        return res.status(400).json({ success: false, message: '数据无效' });
    }
    ensureDirs();
    fs.writeFileSync(NAMES_FILE, JSON.stringify(names), 'utf8');
    res.json({ success: true });
});

app.get('/api/status-names', (req, res) => {
    ensureDirs();
    try {
        if (fs.existsSync(NAMES_FILE)) {
            const names = JSON.parse(fs.readFileSync(NAMES_FILE, 'utf8'));
            return res.json({ success: true, names });
        }
    } catch (e) {}
    res.json({ success: false, names: null });
});

app.listen(PORT, () => {
    console.log('本地账号管理系统 v4.0 已启动: http://localhost:' + PORT);
    ensureDirs();
});
