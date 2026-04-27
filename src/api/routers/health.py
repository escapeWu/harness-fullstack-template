from fastapi import APIRouter

from src.api.models.schemas import HealthResponse
from src.api.services.health import get_health

router = APIRouter(prefix="/api", tags=["health"])


@router.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
    return get_health()
