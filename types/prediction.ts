export interface ProductInput {
  name: string
  price: number
  userBudget: number
  pastSpendingAverage: number
  returnRate: number
}

export interface PredictionResponse {
  regretProbability: number
  budgetStress: number
  satisfactionScore: number
  explanation: string
  alternative: {
    name: string
    price: number
  }
}