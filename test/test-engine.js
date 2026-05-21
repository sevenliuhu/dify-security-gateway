/* Copyright (c) 2026 HOMO AI. Proprietary. License required. Contact: 16208204@qq.com */
const assert = require('assert');
const DifySecurityGateway = require('../engine');
let p=0,f=0;
function t(n,fn){try{fn();p++;console.log(`  ✅ ${n}`)}catch(e){f++;console.log(`  ❌ ${n}: ${e.message}`)}}
console.log('\n📋 HOMO Dify Security Gateway 测试\n');
const gw = new DifySecurityGateway();
t('API Key认证-有效',()=>{const r=gw.authenticate('sk-abc123def456ghi789jkl012','/chat');assert.ok(r.allowed)});
t('API Key认证-空Key',()=>{assert.ok(!gw.authenticate('','/chat').allowed)});
t('审计日志',()=>{const e=gw.auditLog({endpoint:'/chat',method:'POST',userId:'user1'});assert.equal(e.endpoint,'/chat')});
t('敏感检测-API Key',()=>{const f=gw.detectSensitive('my key is sk-abc123def456ghi789jkl012');assert.ok(f.some(x=>x.type==='API Key'))});
t('敏感检测-私钥',()=>{const f=gw.detectSensitive('-----BEGIN RSA PRIVATE KEY-----');assert.ok(f.some(x=>x.type==='Private Key'))});
t('空文本无敏感',()=>{assert.equal(gw.detectSensitive('').length,0)});
t('拦截Critical',()=>{assert.ok(gw.shouldBlock([{type:'Private Key',count:1}]))});
t('放行非Critical',()=>{assert.ok(!gw.shouldBlock([{type:'Email',count:1}]))});
t('用量统计',()=>{const s=gw.getStats();assert.ok(s.totalRequests>=1)});
t('重置',()=>{gw.reset();assert.equal(gw.requests.length,0)});
console.log(`\n📊 Dify Security: ${p} ✅ / ${f} ❌ / ${p+f} 总计\n`);
process.exit(f>0?1:0);
