/* Copyright (c) 2026 HOMO AI. Proprietary. License required. Contact: 16208204@qq.com */
/**
 * HOMO Dify Security Gateway — 安全网关引擎
 * 复用 9router 的 auth.js + audit.js + filter.js
 * 闭源C++二进制交付（原型Node.js）
 */
const crypto = require('crypto');

class DifySecurityGateway {
  constructor() {
    this.requests = [];
    this.blockedCount = 0;
  }

  // 1. API Key 认证
  authenticate(apiKey, endpoint) {
    if (!apiKey) return { allowed: false, reason: 'missing_api_key' };
    const hash = crypto.createHash('sha256').update(apiKey).digest('hex');
    // 简版验证，正式版用 9router auth.js
    if (hash.length === 64) {
      return { allowed: true, keyName: hash.substring(0, 8) };
    }
    return { allowed: false, reason: 'invalid_key' };
  }

  // 2. 审计日志
  auditLog(request) {
    const entry = {
      id: this.requests.length + 1,
      timestamp: new Date().toISOString(),
      endpoint: request.endpoint,
      method: request.method,
      userId: request.userId || 'anonymous',
      model: request.model,
      tokens: request.tokens || 0,
      status: request.status || 'ok',
      ip: request.ip || 'internal'
    };
    this.requests.push(entry);
    return entry;
  }

  // 3. 敏感内容检测 (复用 filter.js 逻辑)
  detectSensitive(text) {
    if (!text) return [];
    const findings = [];
    const patterns = [
      { type: 'API Key', pattern: /sk-[a-zA-Z0-9]{20,}/g },
      { type: 'Token', pattern: /ghp_[a-zA-Z0-9]{36}/g },
      { type: 'Password', pattern: /(password|passwd|pwd)[:=]["\s][^"]{4,}/gi },
      { type: 'Private Key', pattern: /-----BEGIN.*PRIVATE KEY-----/g },
      { type: 'Email', pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g },
    ];
    for (const p of patterns) {
      const matches = text.match(p.pattern);
      if (matches) findings.push({ type: p.type, count: matches.length });
    }
    return findings;
  }

  // 4. 请求拦截
  shouldBlock(findings) {
    const critical = ['Private Key', 'Token'];
    return findings.some(f => critical.includes(f.type));
  }

  // 5. 用量统计
  getStats() {
    return {
      totalRequests: this.requests.length,
      blockedCount: this.blockedCount,
      uniqueUsers: [...new Set(this.requests.map(r => r.userId))].length,
      modelsUsed: [...new Set(this.requests.filter(r => r.model).map(r => r.model))],
    };
  }

  reset() { this.requests = []; this.blockedCount = 0; }
}

module.exports = DifySecurityGateway;
