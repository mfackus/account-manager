# 本地账号管理系统 v4.0

> 基于 Node.js 的本地账号管理工具，纯文件存储，无需数据库。

## 功能特点

- 📂 **纯文件存储** — 使用 JSON 文件存储数据，无需安装数据库
- 🔄 **自动备份** — 每次保存自动备份，保留最近 10 份
- ✏️ **自定义状态** — 12 个可自定义的状态标签，满足不同分类需求
- 🖥️ **可视化界面** — 基于 TailwindCSS 的现代化 UI
- 🚀 **一键启动** — 双击启动即可运行，无需复杂配置

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动服务
npm start
# 或直接双击 启动.bat

# 3. 打开浏览器
# 访问 http://localhost:3000
```

## 文件结构

```
account-manager/
├── server.js         # 后端服务
├── package.json      # 依赖配置
├── 启动.bat           # Windows 启动脚本
├── public/
│   └── index.html    # 前端界面
└── data/             # 数据目录（运行时自动创建）
    ├── accounts.json # 账号数据
    ├── backups/      # 备份文件
    └── status-names.json  # 状态标签
```

## API 接口

| 方法 | 路径 | 说明 |
|:---|:---|---|
| GET | /api/accounts | 获取所有账号数据 |
| POST | /api/accounts | 保存账号数据 |
| GET | /api/status-names | 获取状态名称 |
| POST | /api/status-names | 保存状态名称 |

## 环境要求

- Node.js 18+
- 现代浏览器（Chrome/Edge/Firefox）

## 免责声明

本工具仅供本地使用，不包含用户认证和加密功能，请勿直接暴露在公网。

---

> ⭐ 如果觉得有用，请点个 Star 支持！
