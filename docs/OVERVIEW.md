# harness-fullstack-template — 系统概览

> 最后更新: 2026-04-27

## 项目定位

`harness-fullstack-template` 是一个可复用 fullstack 工程模板，目标是让新项目一开始就具备清晰分层、强类型 API 契约、前端访问边界、文档索引和可执行测试。

它不是业务系统，也不携带任何交易、行情或特定领域逻辑。

## 当前技术栈

| 层级 | 技术 |
|------|------|
| Backend | FastAPI + Pydantic |
| Frontend | Next.js + TypeScript |
| Testing | pytest + httpx ASGITransport |
| Package | uv + npm |

## 当前系统状态

已实现：FastAPI typed health endpoint、service/router/schema 分层、Next.js 最小页面、集中 API client、Next rewrite 代理 `/api/*`、根级测试 harness、分层文档索引。

## 文档索引

| 文档 | 路径 | 说明 |
|------|------|------|
| 技术参考索引 | `docs/reference/INDEX.md` | 架构、接口、测试 runbook 入口 |
| 组件架构 | `docs/reference/architecture.md` | 后端、前端分层与依赖方向 |
| 接口契约 | `docs/reference/interfaces.md` | API response model 与前端类型同步规则 |
| 测试指南 | `docs/reference/runbook-testing.md` | 后端与前端验证命令 |
| 功能索引 | `docs/feature/INDEX.md` | 模板内置能力与后续功能模块入口 |

## 目录结构

```text
harness-fullstack-template/
├── docs/
│   ├── OVERVIEW.md
│   ├── reference/
│   └── feature/
├── src/api/
├── tests/
├── frontend/
├── pyproject.toml
├── Makefile
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

## 运行方式

```bash
uv sync --extra dev
make test
make run-api
```

```bash
cd frontend
npm install
npm run dev
npm run typecheck
```

## 约束

- 后端 router 不写业务判断，业务编排进入 service。
- API 响应结构必须走 `src/api/models/schemas.py`。
- 前端请求统一进入 `frontend/src/lib/api.ts`，默认访问相对 `/api/*`。
- 接口变更时同步更新 `docs/reference/interfaces.md` 与 `frontend/src/types/index.ts`。
- 后端功能变更必须更新 `tests/README.md`。
