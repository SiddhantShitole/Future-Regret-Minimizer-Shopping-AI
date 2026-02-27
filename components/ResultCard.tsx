import { PredictionResponse } from "@/types/prediction"
import RiskMeter from "./RiskMeter"

export default function ResultCard({ data }: { data: PredictionResponse }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl text-white">
      
      <h2 className="text-2xl font-semibold mb-6">
        AI Prediction Analysis
      </h2>

      <RiskMeter value={data.regretProbability} />

      <div className="grid grid-cols-2 gap-6 mt-8 text-sm">
        <div className="bg-black/40 p-4 rounded-xl">
          <p className="text-gray-400">Budget Stress</p>
          <p className="text-xl font-bold">{data.budgetStress}%</p>
        </div>

        <div className="bg-black/40 p-4 rounded-xl">
          <p className="text-gray-400">Long-Term Satisfaction</p>
          <p className="text-xl font-bold">{data.satisfactionScore}%</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-black/30 rounded-xl text-gray-300">
        {data.explanation}
      </div>

      <div className="mt-6 p-4 border border-cyan-500/30 rounded-xl">
        <p className="text-cyan-400 font-semibold mb-2">
          AI Suggested Alternative
        </p>
        <p>{data.alternative.name}</p>
        <p className="text-lg font-bold mt-1">
          ₹{data.alternative.price}
        </p>
      </div>

    </div>
  )
}