"""
HOMO Dify Security Gateway — Dify Plugin 适配器
部署: 复制到 dify/api/extensions/homo_security_gateway.py
"""
import os, json
from flask import request

LICENSE_KEY = os.environ.get("HOMO_DIFY_LICENSE")

class SecurityMiddleware:
    @staticmethod
    def before_request():
        if not LICENSE_KEY:
            return {"error": "HOMO_DIFY_LICENSE not set"}, 500
        api_key = request.headers.get("X-API-Key", "")
        print(f"[HOMO] {request.method} {request.path} key:{api_key[:8]}...")
        if request.is_json:
            body = json.dumps(request.json)
            for s in ["sk-", "ghp_", "BEGIN", "password"]:
                if s in body:
                    return {"error":"Blocked: sensitive content"}, 403
        return None

def init_app(app):
    app.before_request(SecurityMiddleware.before_request)
    print("[HOMO] Dify Security Gateway Active")
    return app
