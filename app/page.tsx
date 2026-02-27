"use client"

import { useState } from "react"
import ProductForm from "@/components/ProductForm"
import ResultCard from "@/components/ResultCard"
import { PredictionResponse } from "@/types/prediction"

export default function Home() {
  const [result, setResult] = useState<PredictionResponse | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center px-6 py-16">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Future-Regret Minimizer AI
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Predict post-purchase regret before you checkout. Make smarter buying decisions with AI-powered financial behavior analysis.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <ProductForm onResult={setResult} />
      </div>

      {result && (
        <div className="w-full max-w-3xl mt-10">
          <ResultCard data={result} />
        </div>
      )}
    </main>
  )
}