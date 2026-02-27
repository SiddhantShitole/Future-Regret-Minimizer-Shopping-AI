import { ProductInput, PredictionResponse } from "@/types/prediction"

export function calculateMockRegret(input: ProductInput): PredictionResponse {
  const budgetStress = (input.price / input.userBudget) * 100

  const spendingDeviation =
    Math.abs(input.price - input.pastSpendingAverage) /
    input.pastSpendingAverage *
    100

  const regretProbability = Math.min(
    100,
    (budgetStress * 0.4 +
      input.returnRate * 30 +
      spendingDeviation * 0.3)
  )

  const satisfactionScore = Math.max(0, 100 - regretProbability)

  return {
    regretProbability: Math.round(regretProbability),
    budgetStress: Math.round(budgetStress),
    satisfactionScore: Math.round(satisfactionScore),
    explanation:
      regretProbability > 60
        ? "High price relative to your budget and unusual spending pattern."
        : "Purchase aligns reasonably with your financial behavior.",
    alternative: {
      name: input.name + " (Budget Version)",
      price: Math.round(input.price * 0.7),
    },
  }
}