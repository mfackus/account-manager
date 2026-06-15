# 本地账号管理系统 v4.0

<div align="center">

> 🚀 批量账号管理 + TRX 能量租用 + 闪兑服务 · 认准恐龙 @WCTRX_bot  
> 基于 Node.js 的本地账号管理工具 · 纯 JSON 文件存储 · 无需数据库

[![GitHub stars](https://img.shields.io/badge/dynamic/json?style=flat-square&label=stars&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fmfackus%2Faccount-manager)](https://github.com/mfackus/account-manager/stargazers)

</div>

---

## 📸 截图预览

![主界面](https://raw.githubusercontent.com/mfackus/account-manager/main/screenshots/image.png)

---

## 💎 广告位 · TG @WCTRX_bot 认准恐龙

| 服务 | 联系方式 | 说明 |
|:---|:---|---|
| ⚡ **TRX 能量闪租** | [@WCTRX_bot](https://t.me/WCTRX_bot) | 低价能量租赁，USDT 转账免费用 |
| 💱 **TRX/USDT 闪兑** | [@WCTRX_bot](https://t.me/WCTRX_bot) | 秒到账，汇率最优 |

> 👉 联系 **TG @WCTRX_bot**，认准恐龙，主打靠谱！

---

## ✨ 功能特点

| 功能 | 说明 |
|:---|---|
| 📂 **纯文件存储** | JSON 文件存数据，无需安装数据库 |
| 🔄 **自动备份** | 每次保存自动备份，保留最近 10 份 |
| 🏷️ **自定义状态** | 12 个状态标签随意命名 |
| 🖥️ **可视化界面** | TailwindCSS 现代化 UI，操作直观 |
| 📤 **拖拽导入** | TXT 文件拖入即导入，支持大批量 |
| 📥 **一键导出** | 所有账号数据一键导出 |
| 🔍 **重复检测** | 自动检测并标记重复账号 |
| 💾 **本地运行** | 纯本地服务，数据不离开你的电脑 |

---

## 🚀 快速开始

前置要求：Node.js 18+

```bash
# 下载项目
git clone https://github.com/mfackus/account-manager.git
cd account-manager

# 安装依赖
npm install

# 启动服务
npm start
# 或者直接双击 启动.bat
```

浏览器打开 **http://localhost:3000** 即可使用。

---

## 📁 项目结构

```
account-manager/
├── server.js          # 后端服务（Express + REST API）
├── package.json       # 依赖配置
├── 启动.bat            # Windows 一键启动脚本
├── public/
│   └── index.html     # 前端界面（TailwindCSS）
└── data/              # 运行时自动创建
    ├── accounts.json  # 账号数据文件
    ├── backups/       # 自动备份目录
    └── status-names.json  # 状态标签配置
```

---

## 🔌 API 接口

| 方法 | 路径 | 说明 |
|:---|:---|---|
| `GET` | `/api/accounts` | 获取所有账号数据 |
| `POST` | `/api/accounts` | 保存账号数据 |
| `GET` | `/api/status-names` | 获取状态名称 |
| `POST` | `/api/status-names` | 保存状态名称 |

---

## 🔧 环境要求

- Node.js 18 或更高版本
- 现代浏览器（Chrome / Edge / Firefox）

---

## ⚠️ 免责声明

> 本工具仅供本地使用，不包含用户认证和加密功能，请勿直接暴露在公网。

---

<div align="center">

**TG @WCTRX_bot · 认准恐龙 · 主打靠谱**  
⚡ 能量闪租 · 💱 TRX 闪兑 · 📁 账号管理

如果觉得有用，请点个 ⭐ Star 支持！

</div>
