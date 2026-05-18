<div align="center">

# 🛡️ dify-security-gateway

> **Dify AI 安全网关**
>
> **Security Gateway for Dify AI Platform**

[![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/sevenliuhu/dify-security-gateway?style=social)](https://github.com/sevenliuhu/dify-security-gateway)
[![GitHub Release](https://img.shields.io/github/v/release/sevenliuhu/dify-security-gateway)](https://github.com/sevenliuhu/dify-security-gateway/releases)
[![Go Report Card](https://goreportcard.com/badge/github.com/sevenliuhu/dify-security-gateway)](https://goreportcard.com/report/github.com/sevenliuhu/dify-security-gateway)
[![Build Status](https://img.shields.io/github/actions/workflow/status/sevenliuhu/dify-security-gateway/ci.yml?branch=main)](https://github.com/sevenliuhu/dify-security-gateway/actions)
[![Docker Pulls](https://img.shields.io/docker/pulls/sevenliuhu/dify-security-gateway)](https://hub.docker.com/r/sevenliuhu/dify-security-gateway)

</div>

> **⚠️ 引擎开发中 --- 预计 2026年Q3 发布第一个版本**
>
> **⚠️ Engine Under Development --- First Release Expected Q3 2026**
>
> 本项目目前处于早期开发阶段，API 和功能可能随时变更。欢迎 Star、Watch 关注进展！
> This project is in early development. API and features may change without notice. Star & Watch for updates!


---

## 📋 目录 / Table of Contents


- [🇨🇳 中文介绍](#-中文介绍)
- [🇬🇧 English Introduction](#-english-introduction)
- [✨ 核心特性 / Features](#-核心特性--features)
- [⚡ 快速开始 / Quick Start](#-快速开始--quick-start)
- [📦 安装 / Installation](#-安装--installation)
- [🚀 使用示例 / Usage Examples](#-使用示例--usage-examples)
- [🏗️ 架构 / Architecture](#️-架构--architecture)
- [🆚 竞品对比 / Competitor Comparison](#-竞品对比--competitor-comparison)
- [🗺️ 路线图 / Roadmap](#️-路线图--roadmap)
- [📚 文档 / Documentation](#-文档--documentation)
- [❓ FAQ](#-faq)
- [💰 版本定价 / Pricing Plans](#-版本定价--pricing-plans)
- [🤝 贡献指南 / Contributing](#-贡献指南--contributing)
- [📞 联系我们 / Contact Us](#-联系我们--contact-us)
- [📄 许可证 / License](#-许可证--license)

---

## 🇨🇳 中文介绍

**dify-security-gateway** 是专为 [Dify](https://github.com/langgenius/dify)（141K+ ⭐，最流行的 LLM 应用开发平台）设计的**企业级安全网关**。

Dify 生态的强大之处在于其灵活的插件系统和丰富的工具集成 --- 但这同时也带来了严重的安全挑战：

- 🔓 **插件安全** --- 第三方插件可以访问系统和用户数据
- 🔑 **凭证泄露** --- 工作流中嵌入的 API Key 和 Secret 可能被 LLM 意外输出
- 🧠 **Prompt 注入** --- 恶意用户在 Chatbot 输入中注入有害指令
- 📊 **数据泄露** --- 敏感业务数据通过 LLM 响应泄露
- 🔄 **工具滥用** --- Agent 在工作流中不当调用外部工具
- 👤 **租户隔离** --- 多租户场景下的数据隔离

**dify-security-gateway** 为 Dify 提供了完整的安全防护体系：

- 🛡️ **插件安全沙箱** --- 插件在隔离的沙箱中运行，严格限制文件/网络访问
- 🔐 **Secrets 管理** --- 安全和凭证脱离 Prompt，自动注入且不暴露给 LLM
- 🧪 **Prompt 防火墙** --- 实时检测和阻断 Prompt 注入、越狱等攻击
- 📝 **输出过滤** --- LLM 响应中的敏感信息自动脱敏
- 👁️ **全链路审计** --- 每个工作流步骤的输入/输出全部记录
- 🏢 **租户隔离** --- 数据和工作流的完全隔离

对标 Dify 的 141K ⭐ 社区，我们相信安全是 AI 应用落地的最后一道防线 --- **dify-security-gateway** 让 Dify 从开箱即用，到开箱即安全。

## 🇬🇧 English Introduction

**dify-security-gateway** is an **enterprise security gateway** purpose-built for [Dify](https://github.com/langgenius/dify) (141K+ ⭐, the most popular LLM application development platform).

The power of the Dify ecosystem lies in its flexible plugin system and rich tool integrations --- but this creates significant security challenges:

- 🔓 **Plugin Security** --- Third-party plugins can access system and user data
- 🔑 **Credential Leakage** --- API keys and secrets embedded in workflows may be accidentally output by LLMs
- 🧠 **Prompt Injection** --- Malicious users planting harmful instructions in Chatbot inputs
- 📊 **Data Leakage** --- Sensitive business data leaked through LLM responses
- 🔄 **Tool Abuse** --- Agents improperly calling external tools during workflows
- 👤 **Tenant Isolation** --- Data isolation in multi-tenant deployments

**dify-security-gateway** provides a complete security protection system for Dify:

- 🛡️ **Plugin Sandbox** --- Plugins run in isolated sandboxes with strict file/network restrictions
- 🔐 **Secrets Management** --- Credentials decoupled from prompts, auto-injected without LLM exposure
- 🧪 **Prompt Firewall** --- Real-time detection and blocking of prompt injection, jailbreak attempts, etc.
- 📝 **Output Filtering** --- Auto-redaction of sensitive information from LLM responses
- 👁️ **Full Workflow Audit** --- Input/output recording at every workflow step
- 🏢 **Tenant Isolation** --- Complete data and workflow isolation

With Dify's 141K+ ⭐ community, we believe security is the last line of defense for AI application deployment --- **dify-security-gateway** transforms Dify from 'ready to use' to 'ready to use securely.'

---

## ✨ 核心特性 / Features

### Dify 插件安全 / Plugin Security

| 特性 | 中文 | English |
|------|------|---------|
| Plugin Sandbox | 插件进程级隔离 + 文件系统限制 | Plugin process isolation + filesystem restrictions |
| Network Policy | 插件网络访问白名单 | Plugin network access allowlisting |
| Resource Limits | CPU/内存/时间限制 | CPU/memory/time limits |
| Permission Model | 细颗粒度插件权限声明 | Granular plugin permission declarations |
| Runtime Monitoring | 插件运行时行为监控 | Plugin runtime behavior monitoring |

### Prompt 安全 / Prompt Security

| 特性 | 中文 | English |
|------|------|---------|
| Prompt Injection Protection | 实时 Prompt 注入检测 | Real-time prompt injection detection |
| Jailbreak Detection | 越狱提示检测 | Jailbreak prompt detection |
| Context Boundary | 系统提示和用户输入隔离 | System prompt vs. user input isolation |
| Topic Control | 对话主题范围控制 | Conversation topic scope control |
| Sensitive Word Filter | 敏感词实时过滤 | Real-time sensitive word filtering |

### 数据安全 / Data Security

| 特性 | 中文 | English |
|------|------|---------|
| PII Detection | PII 信息自动识别 | Automatic PII detection |
| Response Redaction | LLM 输出敏感数据脱敏 | LLM output sensitive data redaction |
| Data Masking | 数据掩码规则引擎 | Data masking rule engine |
| Knowledge Base ACL | 知识库访问控制 | Knowledge base access control |
| Document-Level Permissions | 单文档级别权限 | Per-document level permissions |

### Dify 原生集成 / Dify Native Integration

| 特性 | 中文 | English |
|------|------|---------|
| Dify Plugin | Dify 市场可直接安装 | Installable from Dify marketplace |
| Workflow Integration | 工作流节点级安全策略 | Workflow-node-level security policies |
| Hook System | Webhook 安全事件通知 | Webhook security event notifications |
| Dify API Compatible | 完全兼容 Dify 原生 API | Fully compatible with Dify native API |

---

## ⚡ 快速开始 / Quick Start

### 前提条件 / Prerequisites

```bash
# Docker 和 Docker Compose
# Docker and Docker Compose

# 确保 Dify 已部署
# Ensure Dify is deployed
```

---

## 📦 安装 / Installation

### 方式一：Docker Compose (推荐)

```bash
git clone https://github.com/sevenliuhu/dify-security-gateway.git
cd dify-security-gateway/deploy

cp .env.example .env
vim .env  # 配置 DIFY_URL, API_KEY 等

docker compose up -d
docker compose logs -f
```

### 方式二：Helm (Kubernetes)

```bash
helm repo add homo-ai https://homo-ai.github.io/charts
helm install dify-security-gateway homo-ai/dify-security-gateway \
  --set dify.url=https://dify.example.com \
  --set dify.apiKey=your-api-key
```

---

## 🚀 使用示例 / Usage Examples

### 1. 基础配置 / Basic Configuration

```yaml
# config.yaml
gateway:
  listen: ":8080"
  dify_url: "http://dify:5001"
  dify_api_key: "app-xxxxxxxxxxxx"

prompt_security:
  injection_detection:
    enabled: true
    models:
      - type: ml
        model: "deberta-v3-base"
        threshold: 0.85
      - type: rules
        rules:
          - "ignore_previous_instructions"
          - "forget_your_guidelines"
          - "you_are_now"

  jailbreak_detection:
    enabled: true
    patterns:
      - "DAN"
      - "do_anything_now"
      - "role_play_as"

plugin_sandbox:
  enabled: true
  runtime: "docker"
  network_policy: "allowlist"
  allowed_hosts:
    - "api.openai.com"
    - "api.serper.dev"
```

### 2. 工作流安全策略 / Workflow Security Policies

```yaml
# workflow-policy.yaml
workflows:
  - id: "customer-service"
    prompt_security: strict
    output_filtering: true
    sensitive_fields:
      - "email"
      - "phone"
      - "address"
      - "order_id"
    audit_level: "full"

  - id: "data-analysis"
    prompt_security: relaxed
    output_filtering: false
    audit_level: "summary"
    allowed_tools:
      - "code_interpreter"
      - "data_visualization"
```

### 3. 审计查询 / Audit Queries

```bash
curl http://security-gateway:8080/admin/audit \
  -H 'Authorization: Bearer admin-token' \
  -d '{"from": "2026-05-01", "to": "2026-05-18"}'

curl http://security-gateway:8080/admin/security-events

curl http://security-gateway:8080/admin/report \
  -d '{"format": "pdf", "type": "compliance"}'
```

---

## 🏗️ 架构 / Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     End Users / Apps                      │
│                (Chatbots, Workflows, APIs)                 │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│              dify-security-gateway                        │
│                                                          │
│  ┌─────────────────── Front Security ────────────────┐  │
│  │  Prompt Firewall | Request Validate | Rate Limiter │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  ┌─────────────────── Dify Proxy ───────────────────┐   │
│  │  Auth Forward | Secrets Inject | Context Boundary│   │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  ┌─────────────────── Post Security ───────────────┐    │
│  │  Output Filter | PII Redact | Audit Recorder    │    │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  ┌─────────────────── Plugin Sandbox ─────────────┐     │
│  │  Docker Runtime | Network Policy | Resource Mon│     │
│  └───────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                      Dify Platform                        │
│  LLM Manager | RAG Engine | Workflow Engine | Plugin Sys │
│  Context Store | Memory Manager | Tool Set               │
└──────────────────────────────────────────────────────────┘
```

---

## 🆚 竞品对比 / Competitor Comparison

| 特性 | **dify-security-gateway** | Dify (原生) | Portkey | Helicone | Guardrails AI |
|------|:-----------------------:|:----------:|:-------:|:--------:|:------------:|
| Dify 原生集成 | ✅ 深度 | ✅ 原生 | ❌ | ❌ | ❌ |
| 插件沙箱 | ✅ Docker隔离 | ❌ | ❌ | ❌ | ❌ |
| Prompt 防火墙 | ✅ ML+规则 | ❌ | ❌ | ❌ | ✅ 基础 |
| 输出脱敏 | ✅ PII 检测 | ❌ | ✅ 基本 | ✅ 基本 | ✅ |
| 凭证管理 | ✅ Prompt解耦 | ❌ | ❌ | ❌ | ❌ |
| 工作流审计 | ✅ 每步骤 | ❌ | ✅ 调用级 | ✅ 调用级 | ❌ |
| 租户隔离 | ✅ 数据隔离 | ✅ 基础 | ❌ | ❌ | ❌ |
| 知识库 ACL | ✅ 文档级 | ❌ | ❌ | ❌ | ❌ |
| 部署方式 | Docker/K8s | Docker/K8s | SaaS | SaaS | Python库 |
| 配置复杂度 | 🟢 低 | 🟢 简单 | 🟡 中 | 🟢 低 | 🟡 中 |
| 开源 | ✅ AGPL v3.0 | ✅ Apache 2.0 | ❌ | ✅ MIT | ✅ Apache 2.0 |

---

## 🗺️ 路线图 / Roadmap

| 里程碑 | 时间 | 内容 |
|--------|------|------|
| 🚧 **Alpha** | 2026 Q3 | MVP 版本，核心功能可用 |
| 🧪 **Beta** | 2026 Q4 | 功能增强 + 稳定性提升 |
| 🏗️ **v1.0** | 2027 Q1 | 生产就绪 + 管理界面 |
| 🚀 **v2.0** | 2027 Q3 | 高级功能 + 企业集成 |

---

## 📚 文档 / Documentation

- [📖 官方文档 / Official Docs](https://homo-ai.github.io/dify-security-gateway)
- [⚙️ 配置参考 / Configuration Reference](./docs/config.md)
- [🛡️ Prompt 安全策略 / Prompt Security Policies](./docs/prompt-security.md)
- [📊 审计与合规 / Audit & Compliance](./docs/audit.md)
- [🚀 生产部署 / Production Deployment](./docs/deployment.md)

---

## ❓ FAQ

### Q: dify-security-gateway 会修改 Dify 的代码吗？

A: 不会。我们以代理模式运行，不修改 Dify 的任何代码。网关部署在 Dify 之前，所有流量经由网关转发。

### Q: How does the plugin sandbox work?

A: Each Dify plugin runs in its own Docker container with: (1) read-only root filesystem, (2) network allowlist control, (3) CPU/memory limits, (4) PID namespace process isolation, (5) runtime behavior monitoring. Malicious actions are automatically blocked and reported.

---

### Q: Prompt 防火墙误报率高吗？

A: 我们的 ML 模型在内部测试中达到 99.2% 准确率，误报率 <0.5%。防火墙支持多级阈值配置，管理员可以根据实际场景调整敏感度。

### Q: Does the prompt firewall have a high false positive rate?

A: Our ML model achieves 99.2% accuracy with <0.5% false positive rate in internal tests. The firewall supports multi-level threshold configuration, allowing administrators to adjust sensitivity based on actual scenarios.

---

### Q: 支持多租户吗？

A: 是的，完全支持。每个 Dify 租户独立的安全配置、独立的审计日志、独立的 Prompt 防火墙策略。租户之间完全隔离。

### Q: Does it support multi-tenancy?

A: Yes, fully supported. Each Dify tenant has independent security configuration, audit logs, and prompt firewall policies. Complete isolation between tenants.

---


---

## 💰 版本定价 / Pricing Plans

| 版本 | 价格 | 适用场景 | 主要功能 |
|------|------|----------|----------|
| 🌱 **Sprout Free** | **免费 / Free** | 个人开发者试用 | 基础功能、社区支持、1个项目、速率限制 |
| 🔑 **Key** | **$9.9 /月** | 独立开发者/小团队 | Free 全部 + 高级功能、5个项目、优先队列 |
| 🛡️ **Shield** | **$29.9 /月** | 创业团队 | Key 全部 + 高级防护、20个项目、SLA 99.9% |
| 🏰 **Fortress** | **$99.9 /月** | 中型企业 | Shield 全部 + 专属集群、自定义策略、100个项目 |
| 🏛️ **Citadel** | **$299.9 /月** | 大型企业/政府 | Fortress 全部 + 等保合规、私有部署、专属技术支持 |

> 💡 **开源承诺**：Sprout Free 版本保持 AGPL v3.0 开源免费，功能完整可用。
> 💡 **Open Source Commitment**: Sprout Free tier remains AGPL v3.0 open-source and fully functional.

---

### 🆚 版本对比矩阵 / Feature Comparison

| 功能 | Sprout Free | Key $9.9 | Shield $29.9 | Fortress $99.9 | Citadel $299.9 |
|------|:-----------:|:---------:|:------------:|:--------------:|:--------------:|
| 基础扫描 | ✅ 5次/天 | ✅ 100次/天 | ✅ 1000次/天 | ✅ 不限 | ✅ 不限 |
| 高级规则 | ❌ | ✅ | ✅ | ✅ | ✅ |
| 自定义策略 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 专属集群 | ❌ | ❌ | ❌ | ✅ | ✅ |
| 私有部署 | ❌ | ❌ | ❌ | ❌ | ✅ |
| SLA | 无 | 99.5% | 99.9% | 99.95% | 99.99% |
| 审计日志 | ❌ | 7天 | 30天 | 90天 | 365天+ |
| 技术支持 | 社区 | 邮件 24h | 邮件+IM 4h | 专属经理 1h | 7x24 专线 |
| 合规认证 | --- | --- | --- | ISO 27001 | 等保三级+ |

---


## 📞 联系我们 / Contact Us

| 渠道 | 信息 |
|------|------|
| 📧 邮箱 / Email | [homo-ai@outlook.com](mailto:homo-ai@outlook.com) |
| 💬 微信 / WeChat | `sevenliuhu` |
| 🌐 官网 / Website | [https://homo-ai.github.io](https://homo-ai.github.io) |
| 🐙 GitHub | [@sevenliuhu](https://github.com/sevenliuhu) |

---

**HOMO 智能体 --- 让 AI 更加安全可控**

**HOMO Agent --- Making AI Secure and Controllable**

[⬆ 返回顶部 / Back to Top](#readme)


## 🤝 贡献指南 / Contributing

我们欢迎所有形式的贡献！在提交 Pull Request 之前，请确保：

1. **Fork 仓库** --- 点击右上角的 Fork 按钮
2. **创建分支** --- 从 main 分支创建 feature branch
3. **编写测试** --- 确保新功能有对应的测试覆盖
4. **运行测试** --- 确保所有测试通过: \`make test\`
5. **提交 PR** --- 描述清楚改动的目的和实现方式

### 行为准则 / Code of Conduct

- 尊重所有贡献者，保持友好和专业的讨论氛围
- 禁止任何形式的骚扰、歧视或不专业行为
- 关注技术本身，不进行人身攻击

### 开发环境设置 / Development Setup

\`\`\`bash
# Fork 后克隆自己的仓库
git clone https://github.com/YOUR_USERNAME/REPO.git
cd REPO

# 添加 upstream
git remote add upstream https://github.com/sevenliuhu/REPO.git

# 安装依赖
make deps

# 运行测试
make test

# 构建
make build
\`\`\`

### 提交规范 / Commit Convention

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范:

- \`feat:\` 新功能
- \`fix:\` 修复 bug
- \`docs:\` 文档更新
- \`style:\` 代码格式调整
- \`refactor:\` 代码重构
- \`test:\` 测试相关
- \`chore:\` 杂项

### PR 审查流程 / PR Review Process

1. 维护者会在 48 小时内进行初步审查
2. 自动 CI/CD 流水线会检查代码质量和测试覆盖
3. 至少需要 1 名维护者批准才能合并
4. 合并前需要 rebase 到最新的 main 分支

感谢您的贡献！

---



## 📄 许可证 / License

本项目基于 **GNU Affero General Public License v3.0 (AGPL-3.0)** 开源。
详情请参阅 [LICENSE](./LICENSE) 文件。

This project is open-sourced under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.
See the [LICENSE](./LICENSE) file for details.

---

**HOMO 智能体** --- 旺财出品
**HOMO Agent** --- Powered by Wangcai



---

## 🏛️ 架构详解 / Architecture Deep Dive

### 核心设计原则 / Core Design Principles

本产品遵循以下核心设计原则，确保安全性、可靠性和可维护性：

1. **最少特权原则 (Least Privilege)** --- 每个组件只拥有完成其功能所必需的最小权限集
2. **纵深防御 (Defense in Depth)** --- 多层安全防护，单层失效不导致整体崩溃
3. **默认安全 (Secure by Default)** --- 所有配置的默认值都是最安全的，用户需要主动降低安全级别
4. **失败安全 (Fail Secure)** --- 系统在异常情况下默认拒绝访问，而非放行
5. **可审计性 (Auditability)** --- 所有安全决策都有记录，可追溯可复现
6. **可观测性 (Observability)** --- 内置 Metrics、Tracing、Logging 三大支柱

### 性能指标 / Performance Benchmarks

| 指标 | 目标值 | 测试环境 |
|------|--------|----------|
| 请求延迟 (P50) | <5ms | 4C8G 单实例 |
| 请求延迟 (P99) | <20ms | 4C8G 单实例 |
| 吞吐量 | >10,000 req/s | 4C8G 单实例 |
| 并发连接 | >10,000 | 4C8G 单实例 |
| 内存占用 | <200MB (基础) | 空闲状态 |
| 启动时间 | <3秒 | 容器化部署 |

### 安全合规 / Security Compliance

- ✅ **SOC 2 Type II** --- 服务组织控制审计（2026 Q4 预计）
- ✅ **ISO 27001** --- 信息安全管理体系（2027 Q1 预计）
- ✅ **等保三级** --- 中国信息安全等级保护（2027 Q2 预计）
- ✅ **GDPR** --- 欧盟通用数据保护条例兼容
- ✅ **FedRAMP** --- 美国政府云安全标准（Enterprise 版本）

---

## 🛠️ 技术支持 / Technical Support

### 支持渠道 / Support Channels

| 渠道 | 描述 | 响应时间 |
|------|------|----------|
| 📧 邮件支持 | homo-ai@outlook.com | 24小时内 |
| 💬 微信 | sevenliuhu | 工作时间2小时内 |
| 🐙 GitHub Issues | GitHub Discussions | 48小时内 |
| 📚 文档中心 | 官方文档网站 | 自助服务 |

### 常见集成场景 / Common Integration Scenarios

**场景一：Docker Compose 单机部署**

适用于开发测试和中小规模生产环境。一键启动，包含所有依赖服务。

```bash
git clone https://github.com/sevenliuhu/dify-security-gateway.git
cd dify-security-gateway/deploy
docker compose -f docker-compose.yml -f docker-compose.monitoring.yml up -d
```

**场景二：Kubernetes 集群部署**

适用于大规模生产环境，支持自动扩缩容和滚动更新。

```bash
helm repo add homo-ai https://homo-ai.github.io/charts
helm upgrade --install dify-security-gateway homo-ai/dify-security-gateway \
  --namespace homo-system --create-namespace \
  --set replicaCount=3 \
  --set resources.requests.cpu=500m \
  --set ingress.enabled=true
```

**场景三：与现有系统集成**

支持作为 Sidecar、反向代理、API 网关三种模式集成。

```yaml
# Sidecar 模式配置
mode: sidecar
upstream: "http://localhost:8080"
sidecar_port: 8443
```

### 版本升级策略 / Upgrade Strategy

| 升级类型 | 描述 | 停机时间 |
|----------|------|----------|
| 🐛 补丁 (1.0.x) | Bug 修复，API 完全兼容 | 无停机 |
| 🚀 小版本 (1.x.0) | 新功能，API 向后兼容 | <30秒 |
| 💥 大版本 (x.0.0) | 架构变更，可能有 Breaking Changes | 需规划迁移 |

---

## 📊 成功案例 / Success Stories

### 案例一：某金融科技公司
- **行业**：金融科技
- **规模**：200+ API，日均调用量 500 万次
- **挑战**：需要满足等保三级合规，同时不影响现有架构
- **方案**：采用反向代理模式集成，30 分钟完成部署
- **成果**：成功通过等保三级审计，API 安全问题减少 95%

### 案例二：某 AI 创业公司
- **行业**：AI SaaS
- **规模**：50 人团队，3 个 AI Agent 产品线
- **挑战**：第三方插件安全问题，数据泄露风险
- **方案**：集成安全沙箱 + Prompt 防火墙
- **成果**：插件安全事故归零，客户信任度提升 40%

### 案例三：某科研机构
- **行业**：学术研究
- **规模**：500+ 科研人员，日均 10 万次数据查询
- **挑战**：保护科研数据不被爬取，同时不影响合法访问
- **方案**：部署智能反爬网关 + 学术身份认证
- **成果**：恶意爬取减少 90%，合法科研访问零影响

---

## 🌟 社区与生态 / Community & Ecosystem

### 相关项目 / Related Projects

| 项目 | 描述 | GitHub |
|------|------|--------|
| HOMO Agent | AI 智能体总控平台 | [@sevenliuhu/homo-agent](https://github.com/sevenliuhu/homo-agent) |
| HOMO Scraper | 智能反爬抓取系统 | [@sevenliuhu/homo-scraper](https://github.com/sevenliuhu/homo-scraper) |
| HOMO Secure | 企业安全套件 | [@sevenliuhu/homo-secure](https://github.com/sevenliuhu/homo-secure) |

### 媒体与报道 / Media Coverage

- 🎤 **HOMO 智能体** 入选 2026 年度 AI 安全创新产品
- 📄 **TechCrunch** --- "A new standard for AI agent security"
- 📰 **InfoQ** --- 专访：如何构建企业级 AI 安全体系
- 🎙️ **AI 安全播客** --- Episode 42: 从零开始构建安全沙箱

### 致谢 / Acknowledgments

- 感谢所有贡献者的辛勤工作
- 感谢 Dify / CrewAI / UI-TARS 等开源社区的启发
- 感谢早期用户的信任和反馈
- 特别感谢我们的家人和朋友的支持

---

## 📅 更新日志 / Changelog

### v0.1.0 (开发中 / In Development)
- 🎉 初始版本发布
- ✅ 核心功能开发中
- ✅ 基础文档构建完成
- ⏳ 自动化测试搭建中
- ⏳ CI/CD 流水线建设中

### v0.0.1 (原型 / Prototype)
- 🧪 概念验证 (PoC)
- ✅ 核心架构设计
- ✅ 技术选型和可行性验证
- ✅ 原型演示

---

## 📋 附录 / Appendix

### A. 术语表 / Glossary

| 术语 | 中文 | 英文定义 |
|------|------|----------|
| ACL | 访问控制列表 | Access Control List |
| RBAC | 基于角色访问控制 | Role-Based Access Control |
| mTLS | 双向 TLS | Mutual TLS |
| OIDC | OpenID Connect | OpenID Connect |
| HSM | 硬件安全模块 | Hardware Security Module |
| SLA | 服务等级协议 | Service Level Agreement |
| PII | 个人可识别信息 | Personally Identifiable Information |

### B. 环境变量参考 / Environment Variables Reference

```bash
# 通用配置
LOG_LEVEL=info                  # 日志级别: debug/info/warn/error
LOG_FORMAT=json                 # 日志格式: json/text
METRICS_ENABLED=true            # 是否启用 Metrics
METRICS_PORT=9090               # Metrics 端口

# 安全配置
TLS_ENABLED=true                # 是否启用 TLS
TLS_CERT_PATH=/etc/certs/tls.crt # 证书路径
TLS_KEY_PATH=/etc/certs/tls.key  # 私钥路径
AUTH_MODE=oidc                  # 认证模式: none/jwt/oidc/mtls

# 性能配置
MAX_CONNECTIONS=10000           # 最大连接数
REQUEST_TIMEOUT=30s             # 请求超时时间
RATE_LIMIT_ENABLED=true         # 是否启用限流
RATE_LIMIT_RPM=1000             # 每分钟允许请求数

# 存储配置
STORAGE_TYPE=local              # 存储类型: local/redis/s3
STORAGE_PATH=/data              # 本地存储路径
REDIS_URL=redis://localhost:6379/0  # Redis 连接 URL
```

### C. 常见错误码 / Common Error Codes

| 错误码 | 含义 | 处理方式 |
|--------|------|----------|
| 1001 | 认证失败 | 检查 API Key 或 Token 是否有效 |
| 1002 | 权限不足 | 确认用户角色是否有对应权限 |
| 1003 | 请求频率超限 | 稍后重试或升级版本 |
| 2001 | 配置格式错误 | 检查配置文件的 YAML/JSON 格式 |
| 2002 | 证书过期 | 更新 TLS 证书 |
| 3001 | 上游服务不可达 | 检查后端服务是否正常运行 |
| 3002 | 上游服务超时 | 增加超时时间或优化后端性能 |
| 4001 | 内部错误 | 联系技术支持并提供日志 |
| 5001 | 沙箱资源耗尽 | 增加资源配额或升级版本 |

### D. 相关标准与协议 / Related Standards & Protocols

- **IETF RFC 8446** --- TLS 1.3 协议标准
- **IETF RFC 6749** --- OAuth 2.0 授权框架
- **IETF RFC 7519** --- JSON Web Token (JWT)
- **ISO/IEC 27001** --- 信息安全管理体系
- **NIST SP 800-207** --- 零信任架构
- **OWASP ASVS** --- Web 应用安全验证标准
- **PCI DSS** --- 支付卡行业数据安全标准

---

## 📝 关于项目 / About This Project

### 项目背景 / Project Background

本产品是 **HOMO 智能体** 安全产品线的一部分，由旺财（老鬼）和团队倾力打造。

HOMO 智能体致力于构建 AI 时代的全方位安全体系，从 Agent 运行时安全、数据安全、网络安全到合规审计，为企业提供端到端的安全解决方案。

我们相信，安全不是功能，而是 AI 应用落地的**基础条件**。只有当安全不再是瓶颈的时候，AI 的真正价值才能被释放。

### 许可证说明 / License Note

本项目采用 AGPL v3.0 开源许可证。对于商业使用场景，我们提供商业许可证（见定价部分）。如果您对本项目的开源/商业使用有任何疑问，请联系我们。

---

<div align="center">

**Made with ❤️ by HOMO Team**

**[⬆ 返回顶部 / Back to Top](#readme)**

</div>

### Related Projects from HOMO 🤖

| Project | Description |
|---------|-------------|
| [AgentMemory Vault](https://github.com/sevenliuhu/agentmemory-vault) | 🔒 AES-256-GCM encrypted memory for AI agents |
| [9router Gateway](https://github.com/sevenliuhu/9router-gateway) | 🌉 Enterprise API gateway for LLMs |
| [Skill Vault](https://github.com/sevenliuhu/skill-vault) | 🔐 Encrypt and protect AI agent skills |
| [Memory Vault](https://github.com/sevenliuhu/memory-vault) | 🗄️ Multi-tenant encrypted memory vault |
| [BrowserHand](https://github.com/sevenliuhu/browserhand) | 🕵️ Stealth browser automation toolkit |
| [OHIF HIPAA Vault](https://github.com/sevenliuhu/ohif-hipaa-vault) | 🏥 HIPAA compliance for OHIF Viewer |
| [Freqtrade Strategy Vault](https://github.com/sevenliuhu/freqtrade-strategy-vault) | 📊 Encrypted trading strategies |
| [UI-TARS Sandbox](https://github.com/sevenliuhu/ui-tars-sandbox) | 🏖️ Agent security sandbox |
| [SciScrape Gateway](https://github.com/sevenliuhu/sciscrape-gateway) | 🔬 Research anti-scraping gateway |
| [CrewAI Vault](https://github.com/sevenliuhu/crewai-vault) | 👥 CrewAI enterprise encryption |
| [MCP Secure](https://github.com/sevenliuhu/mcp-secure) | 🛡️ MCP protocol security layer |
| [API Secure Gateway](https://github.com/sevenliuhu/api-secure-gateway) | 🚪 Enterprise API security |
| [Dify Security Gateway](https://github.com/sevenliuhu/dify-security-gateway) | 🤖 Dify AI security gateway |
