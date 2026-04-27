# 组件架构

```text
Frontend pages/components
        ↓
frontend/src/lib/api.ts
        ↓
Next.js rewrite /api/*
        ↓
FastAPI routers
        ↓
services
        ↓
models/schemas + config
```

## Backend 分层

```text
models/schemas -> config -> services -> routers -> app
```

| 层级 | 职责 |
|------|------|
| `src/api/models/schemas.py` | API response/request 契约 |
| `src/api/config.py` | 应用配置与默认值 |
| `src/api/services/` | 业务逻辑与编排，可单元测试 |
| `src/api/routers/` | HTTP 入口、参数解析、response_model 接线 |
| `src/api/app.py` | FastAPI app 组装 |

规则：router 不承载业务判断；service 不依赖 router；schema 是对外契约的单一事实来源。

## Frontend 分层

```text
types -> next.config.ts rewrite -> lib/api.ts -> components/pages
```

规则：前端不硬编码 backend host；页面不直接 fetch；共享类型放 `frontend/src/types/index.ts`。
