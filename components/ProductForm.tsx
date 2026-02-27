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
      <input
  name="name"
  placeholder="Product Name"
  onChange={handleChange}
  className="w-full bg-black/40 border border-gray-700 focus:border-cyan-400 outline-none px-4 py-3 rounded-lg"
/>
<input
  name="Price"
  placeholder="Price"
  onChange={handleChange}
  className="w-full bg-black/40 border border-gray-700 focus:border-cyan-400 outline-none px-4 py-3 rounded-lg"
/>
<input
  name="userBudget"
  placeholder="Your Budget"
  onChange={handleChange}
  className="w-full bg-black/40 border border-gray-700 focus:border-cyan-400 outline-none px-4 py-3 rounded-lg"
/>
<input
  name="pastSpendingAverage"
  placeholder="Avg Past Spending"
  onChange={handleChange}
  className="w-full bg-black/40 border border-gray-700 focus:border-cyan-400 outline-none px-4 py-3 rounded-lg"
/>
<input
  name="returnRate"
  placeholder="Return Rate (0-1)"
  onChange={handleChange}
  className="w-full bg-black/40 border border-gray-700 focus:border-cyan-400 outline-none px-4 py-3 rounded-lg"
/>
      
   <button
  type="submit"
  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-all duration-300 py-3 rounded-lg font-semibold"
>
  Analyze with AI
</button>
    </form>
  )
}