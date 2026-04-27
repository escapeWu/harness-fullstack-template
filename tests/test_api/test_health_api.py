import pytest
from httpx import ASGITransport, AsyncClient

from src.api.app import app

pytestmark = pytest.mark.anyio


async def test_health_endpoint_returns_typed_contract() -> None:
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/api/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok", "service": "harness-fullstack-template"}
