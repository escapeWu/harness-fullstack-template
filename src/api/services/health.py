from src.api.config import settings
from src.api.models.schemas import HealthResponse


def get_health() -> HealthResponse:
    return HealthResponse(status="ok", service=settings.app_name)
