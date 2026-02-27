"use client"

import { useState } from "react"
import { ProductInput, PredictionResponse } from "@/types/prediction"

interface Props {
  onResult: (data: PredictionResponse) => void
}

export default function ProductForm({ onResult }: Props) {
  const [form, setForm] = useState<ProductInput>({
    name: "",
    price: 0,
    userBudget: 0,
    pastSpendingAverage: 0,
    returnRate: 0,
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch("/api/predict", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        userBudget: Number(form.userBudget),
        pastSpendingAverage: Number(form.pastSpendingAverage),
        returnRate: Number(form.returnRate),
      }),
    })

    const data = await res.json()
    onResult(data)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Product Name" onChange={handleChange} className="input" />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} className="input" />
      <input name="userBudget" type="number" placeholder="Your Budget" onChange={handleChange} className="input" />
      <input name="pastSpendingAverage" type="number" placeholder="Avg Past Spending" onChange={handleChange} className="input" />
      <input name="returnRate" type="number" step="0.1" placeholder="Return Rate (0–1)" onChange={handleChange} className="input" />

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Analyze Regret Risk
      </button>
    </form>
  )
}