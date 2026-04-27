from src.api.models.schemas import HealthResponse
from src.api.services.health import get_health


def test_get_health_returns_pydantic_contract() -> None:
    health = get_health()

    assert isinstance(health, HealthResponse)
    assert health.status == "ok"
    assert health.service == "harness-fullstack-template"
