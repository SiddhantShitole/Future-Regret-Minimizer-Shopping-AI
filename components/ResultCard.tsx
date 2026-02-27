import { PredictionResponse } from "@/types/prediction"

export default function ResultCard({ data }: { data: PredictionResponse }) {
  return (
    <div className="mt-8 p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Prediction Result</h2>

      <p>Regret Probability: {data.regretProbability}%</p>
      <p>Budget Stress: {data.budgetStress}%</p>
      <p>Long-term Satisfaction: {data.satisfactionScore}%</p>

      <p className="mt-4 italic">{data.explanation}</p>

      <div className="mt-4">
        <h3 className="font-semibold">Suggested Alternative</h3>
        <p>{data.alternative.name}</p>
        <p>₹{data.alternative.price}</p>
      </div>
    </div>
  )
}