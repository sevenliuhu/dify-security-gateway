# Dify AI 安全网关 / Dify Security Gateway

> ⚠️ **引擎开发中 — 预计 2026年Q3 发布第一个版本**
> **⚠️ Engine Under Development — First Release Expected Q3 2026**

<p align="center">
  <strong>LLM 应用安全 · 内容审核 · 审计日志</strong>
  <br />
  <strong>LLM Application Security · Content Moderation · Audit Logging</strong>
</p>

---

## 产品介绍 / Product Introduction

### 概述 / Overview

**Dify Security Gateway** 是专为 [langgenius/dify](https://github.com/langgenius/dify) (141K ⭐) 生态打造的安全网关。它为 Dify 平台上的 LLM 应用提供企业级安全能力：内容安全审核、访问控制、审计日志和敏感数据保护，让 AI 应用在企业环境中安全合规地运行。

**Dify Security Gateway** is a security gateway built specifically for the [langgenius/dify](https://github.com/langgenius/dify) (141K ⭐) ecosystem. It provides enterprise-level security capabilities for LLM applications on the Dify platform: content security moderation, access control, audit logging, and sensitive data protection, enabling AI applications to run safely and compliantly in enterprise environments.

### 为什么需要 Dify 安全网关？/ Why Dify Security Gateway?

Dify 让构建 LLM 应用变得简单，但缺乏内置的企业级安全防护 / Dify makes building LLM applications easy but lacks built-in enterprise security:

1. **内容风险** — LLM 输出可能包含不当内容 / LLM outputs may contain inappropriate content
2. **数据泄露** — 用户输入可能包含敏感数据 / User inputs may contain sensitive data
3. **缺乏审计** — 无法追溯用户和 LLM 的交互 / Cannot trace user-LLM interactions
4. **访问控制** — 缺少细粒度的用户权限管理 / Lacks granular user permission management

### 适用场景 / Use Cases

- **企业 Dify 部署** — 为企业 Dify 平台增加安全层 / Add a security layer to enterprise Dify deployments
- **合规要求** — 满足数据安全法和行业监管要求 / Meet data security laws and industry regulations
- **多租户** — 为不同客户提供隔离的 Dify 环境 / Provide isolated Dify environments for different clients
- **内容审核** — 自动审核 LLM 输入和输出内容 / Auto-moderate LLM inputs and outputs

## 核心功能 / Core Features

### 🛡️ 内容安全审核 / Content Security Moderation

| 功能 / Feature | 说明 / Description |
|------|---------|
| 输入审核 / Input Moderation | 实时检测用户输入的敏感内容 / Real-time detection of sensitive user inputs |
| 输出审核 / Output Moderation | 过滤 LLM 输出的不当内容 / Filter inappropriate LLM outputs |
| PII 检测 / PII Detection | 自动识别和脱敏个人身份信息 / Auto-identify and mask PII |
| 关键词过滤 / Keyword Filtering | 自定义敏感词库 / Customizable sensitive word library |
| 语义分析 / Semantic Analysis | AI 驱动的深层语义检测 / AI-powered deep semantic detection |

### 🔐 访问控制 / Access Control

| 功能 / Feature | 说明 / Description |
|------|---------|
| 应用级权限 / App-level Permissions | 按 Dify 应用授权 / Per-Dify-app authorization |
| 用户认证 / User Auth | 支持多认证源 / Multi-auth source support |
| API Key 管理 / API Key Management | Dify API 密钥安全托管 / Secure Dify API key hosting |
| 临时授权 / Temporary Access | 限时应用访问 / Time-limited app access |

### 📋 审计日志 / Audit Logging

| 功能 / Feature | 说明 / Description |
|------|---------|
| 全量交互记录 / Full Interaction Logs | 记录每次用户与 LLM 的交互 / Log every user-LLM interaction |
| 敏感操作告警 / Sensitive Operation Alerts | 检测和告警敏感操作 / Detect and alert on sensitive ops |
| 使用分析 / Usage Analytics | LLM 调用量和使用模式分析 / LLM call volume and usage pattern analysis |
| 合规报告 / Compliance Reports | 自动生成合规审计报告 / Auto-generate compliance audit reports |

### 🔒 数据保护 / Data Protection

| 功能 / Feature | 说明 / Description |
|------|---------|
| 敏感数据脱敏 / Data Masking | 自动脱敏输入输出中的敏感数据 / Auto-mask sensitive data in I/O |
| 数据隔离 / Data Isolation | 按租户隔离 LLM 调用数据 / Per-tenant LLM call data isolation |
| 加密存储 / Encrypted Storage | 对话和日志加密存储 / Encrypted conversation and log storage |
| 数据保留策略 / Data Retention | 可配置的数据保留期限 / Configurable data retention period |

## 技术架构 / Architecture

```
User → Dify App → Dify Security Gateway → Dify Platform → LLM
                     ↓            ↓              ↓
               Content Filter  Access Control  Audit Logger
                     ↓                           ↓
               Policy Engine → Compliance Dashboard → Data Store
```

## 快速开始 / Quick Start

### 前提条件 / Prerequisites
- Docker 20.10+
- Dify (v0.6+)
- 4GB RAM
- 8GB 磁盘 / Disk

### 安装 / Installation

```bash
docker pull homolabs/dify-security-gateway:latest
docker run -d \
  --name dify-gateway \
  -p 8080:8080 \
  -p 9090:9090 \
  -e DIFY_URL=http://your-dify:5001 \
  -e DIFY_API_KEY=your-api-key \
  homolabs/dify-security-gateway:latest
```

### 配置 Dify 集成 / Configure Dify Integration

```yaml
dify:
  url: "http://localhost:5001"
  api_key: "app-xxxxxxxxxxxxx"
  apps:
    - id: "chatbot-01"
      moderation_level: "strict"
    - id: "assistant-01"
      moderation_level: "normal"
security:
  content_moderation:
    pii_detection: true
    pii_masking: true
    keyword_filter: true
    keywords_file: "/etc/gateway/sensitive-words.txt"
  rate_limit:
    requests_per_minute: 60
    tokens_per_minute: 100000
audit:
  storage: "postgresql"
  connection: "postgresql://user:pass@db:5432/audit"
```

## API 文档 / API Documentation

```
POST /api/v1/moderate       — 内容审核 / Content moderation
POST /api/v1/check-pii      — PII 检测 / PII detection
GET  /api/v1/audit/logs     — 审计日志 / Audit logs
GET  /api/v1/analytics      — 分析报表 / Analytics
POST /api/v1/apps/:id/block — 封锁应用 / Block app
```

## 定价方案 / Pricing

| 版本 / Plan | 价格 / Price | LLM 请求 / Requests | Dify 应用 / Apps | 审计保留 / Audit Retention | 支持 / Support |
|------|------|---------|---------|------|------|
| 🌱 Sprout Free | **免费 / Free** | 1000/月 | 2 | 7天 | 社区 / Community |
| 🔑 Key | **$9.9/月** | 50000/月 | 10 | 30天 | 邮件 / Email |
| 🛡️ Shield | **$29.9/月** | 500000/月 | 50 | 90天 | 邮件+工单 |
| 🏰 Fortress | **$99.9/月** | 无限 / Unlimited | 无限 / Unlimited | 180天 | 优先工单 |
| 🏛️ Citadel | **$299.9/月** | 无限 / Unlimited | 无限 / Unlimited | 365天 | 专属支持 / Dedicated |

## 联系方式 / Contact

- 📧 **homo-ai@outlook.com**
- 💬 **sevenliuhu** (微信 / WeChat)

## 购买流程 / Purchase Process

1. **选择方案 / Choose a Plan**
2. **提交订单 / Submit Order** — 通过邮箱或微信提交 / Submit via email or WeChat
3. **确认付款 / Confirm Payment** — 信用卡/PayPal/USDT/微信/支付宝
4. **开通服务 / Service Activation** — 24小时内开通 / Activated within 24 hours
5. **开始使用 / Start Using**

## 常见问题 / FAQ

### Q: Dify Security Gateway 会影响 Dify 性能吗？/ Does it affect Dify performance?
A: 影响极小，内容审核延迟通常 < 100ms。Minimal impact — content moderation latency is typically < 100ms.

### Q: 支持哪些 LLM 提供商？/ Which LLM providers are supported?
A: 支持 Dify 平台集成的所有 LLM（OpenAI、Claude、Gemini、文心、通义千问等）。Supports all LLMs integrated with the Dify platform (OpenAI, Claude, Gemini, ERNIE, Qwen, etc.).

### Q: PII 检测支持的语种？/ Which languages does PII detection support?
A: 支持中文、英文、日文、韩文等多语种 PII 检测。Supports multi-language PII detection (Chinese, English, Japanese, Korean, etc.).

### Q: 支持私有化部署吗？/ Does it support on-premise deployment?
A: 支持，所有版本均可私有化部署。All plans support on-premise deployment.

## 许可证 / License

本项目采用 **GNU Affero General Public License v3.0**。This project is licensed under **AGPL v3.0**.

<p align="center"><strong>Built with ❤️ by HOMO Labs</strong></p>
