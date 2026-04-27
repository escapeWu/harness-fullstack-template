# template-health

提供一个最小 typed API，用来验证后端 app、router、service、schema、前端 API client 与测试 harness 的边界。

## API

- `GET /api/health` → `HealthResponse`

## 测试

- `tests/test_services/test_health_service.py`
- `tests/test_api/test_health_api.py`
