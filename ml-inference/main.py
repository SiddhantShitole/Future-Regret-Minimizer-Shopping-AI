import torch
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

model = torch.jit.load("regret_model.pt")
model.eval()


class ProductInput(BaseModel):
    price: float
    user_budget: float
    past_avg_spending: float
    return_rate: float
    spending_deviation: float


@app.post("/predict")
def predict(data: ProductInput):
    input_tensor = torch.tensor([[
        data.price,
        data.user_budget,
        data.past_avg_spending,
        data.return_rate,
        data.spending_deviation
    ]], dtype=torch.float32)

    with torch.no_grad():
        output = model(input_tensor).tolist()[0]

    regret = max(0, min(100, output[0]))
    budget_stress = max(0, min(100, output[1]))
    satisfaction = max(0, 100 - regret)

    return {
        "regret_probability": round(regret, 2),
        "budget_stress": round(budget_stress, 2),
        "satisfaction": round(satisfaction, 2)
    }