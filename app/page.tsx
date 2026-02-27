"use client"

import { useState } from "react"
import ProductForm from "@/components/ProductForm"
import ResultCard from "@/components/ResultCard"
import { PredictionResponse } from "@/types/prediction"

export default function Home() {
  const [result, setResult] = useState<PredictionResponse | null>(null)

  return (
    <main className="min-h-screen p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Future-Regret Minimizer Shopping AI
      </h1>

      <ProductForm onResult={setResult} />

      {result && <ResultCard data={result} />}
    </main>
  )
}