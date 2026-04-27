# Tests 概览

## 运行

```bash
uv run pytest tests/ -v
# 或
make test
```

## 当前测试清单

| 文件 | 类型 | 说明 |
|------|------|------|
| `test_services/test_health_service.py` | unit | 校验 service 返回 Pydantic API 契约 |
| `test_api/test_health_api.py` | API/E2E | 通过 ASGITransport 校验 `/api/health` 真实 FastAPI 路径 |

## 约定

- 后端新增功能时，同步补 service/unit 或 API/E2E 测试。
- 修改测试结构后，同步更新本文件。
- async API 测试使用 `pytest.mark.anyio`，并由 `tests/conftest.py` 固定 `asyncio` backend。
