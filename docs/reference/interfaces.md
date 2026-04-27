# 接口契约

## HealthResponse

后端来源：`src/api/models/schemas.py`

```python
class HealthResponse(BaseModel):
    status: str
    service: str
```

前端同步：`frontend/src/types/index.ts`

```ts
export type HealthResponse = {
  status: string;
  service: string;
};
```

## 接口变更规则

- 新增或修改 API response model 时，先更新 Pydantic schema。
- 同步更新 frontend type。
- 同步更新 API/E2E 测试。
- 若接口含业务语义，同步更新对应 feature 文档。
