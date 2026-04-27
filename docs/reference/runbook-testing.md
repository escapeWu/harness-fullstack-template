# 测试指南

## Backend

```bash
uv sync --extra dev
uv run pytest tests/ -v
# 或
make test
```

API 测试使用 `httpx.AsyncClient` + `ASGITransport(app=app)`，覆盖真实 FastAPI 路由路径。async 测试使用 `pytest.mark.anyio`。

## Frontend

```bash
cd frontend
npm install
npm run typecheck
npm run build
```

## 常见问题

- `ModuleNotFoundError: No module named src`：确认在仓库根目录运行，且 `pyproject.toml` 包含 `[tool.setuptools.packages.find] include = ["src*"]`。
- `async def functions are not natively supported`：确认安装 dev 依赖并使用 `pytest.mark.anyio` / `pytest-asyncio` 配置。
