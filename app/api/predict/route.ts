import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const spendingDeviation =
    Math.abs(body.price - body.pastSpendingAverage) /
    body.pastSpendingAverage

  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      price: body.price,
      user_budget: body.userBudget,
      past_avg_spending: body.pastSpendingAverage,
      return_rate: body.returnRate,
      spending_deviation: spendingDeviation
    })
  })

  const data = await response.json()

  return NextResponse.json({
    regretProbability: Math.max(0, Math.min(100, data.regret_probability)),
    budgetStress: Math.max(0, Math.min(100, data.budget_stress)),
    satisfactionScore: Math.max(0, Math.min(100, data.satisfaction)),
    explanation:
      data.regret_probability > 60
        ? "Model predicts high regret risk."
        : "Model predicts manageable purchase.",
    alternative: {
      name: body.name + " (Lower Cost Option)",
      price: Math.round(body.price * 0.75)
    }
  })
}