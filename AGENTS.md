# Agent 开发规约

开始任何重要开发前，先读 [`docs/OVERVIEW.md`](docs/OVERVIEW.md)。本仓库是 `harness-fullstack-template`：一个 docs-first、强类型契约、分层清晰、测试可执行的 fullstack 模板。

## 核心原则

- **Docs-first**：新增模块先更新 `docs/feature/` 或 `docs/reference/` 的索引与说明。
- **单一事实来源（SSOT）**：业务编排放 service / domain core，不在 router、frontend、脚本里重复实现。
- **强类型契约**：API 响应走 Pydantic schema；前端共享类型放 `frontend/src/types/index.ts`。
- **分层不反向**：只能向下依赖，不允许 router 绕过 service，不允许 frontend 绕过 `src/lib/api.ts`。
- **真实路径测试**：后端新增能力必须补测试，不能只 mock 掉真实调用路径。

## 分层约束

**Backend**: `models/schemas -> config -> services -> routers -> app`

- `src/api/routers/` 只做 HTTP 参数、依赖注入、response_model 接线。
- `src/api/services/` 承载业务编排和可测试逻辑。
- `src/api/models/schemas.py` 是 API 契约出口。

**Frontend**: `types -> config/next.config.ts -> lib/api.ts -> hooks/components -> pages`

- 前端禁止直接写 backend host；通过 Next rewrite 访问相对 `/api/*`。
- HTTP helper 统一放 `frontend/src/lib/api.ts`。

## 文档规则

文档入口是 `docs/OVERVIEW.md`。技术参考放 `docs/reference/`，功能模块放 `docs/feature/`。修改接口时同步更新 `docs/reference/interfaces.md`。

## 测试规则

- 后端新增或修改功能必须更新 `tests/`。
- 修改测试结构后同步更新 `tests/README.md`。
- 推荐验证命令：`make test`，前端类型检查：`make frontend-typecheck`。

## 历史教训

1. 模板必须避免保留旧路径诱导新项目走错层级；废弃路径应迁移后删除，而不是长期并存。
