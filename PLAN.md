# HOMO Dify Security Gateway — 适配方案

## Dify 架构 4 个注入点

| 注入点 | 路径 | 9router复用 | 作用 |
|:------:|------|:-----------:|------|
| 1. Blueprint | `api/extensions/ext_blueprints.py` | auth.js | API Key认证中间件 |
| 2. 核心模块 | `api/core/plugin/` | audit.js | LLM调用审计日志 |
| 3. 审核系统 | `api/core/moderation/` | filter.js | 敏感内容检测 |
| 4. 控制层 | `api/controllers/` | 全部 | 请求拦截 |

## 部署方式

```
dify/api/extensions/homo_security_gateway.py  ← 复制此文件
                                                 ↓
设置环境变量 HOMO_DIFY_LICENSE=your_key
                                                 ↓
重启 Dify → 安全网关自动生效
```

## 模式

开源 Dify 社区版 + 闭源安全网关插件 + License Key
