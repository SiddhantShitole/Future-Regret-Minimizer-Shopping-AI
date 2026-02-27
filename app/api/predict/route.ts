import { NextResponse } from "next/server"
import { calculateMockRegret } from "@/lib/mockModel"

export async function POST(req: Request) {
  const body = await req.json()

  const prediction = calculateMockRegret(body)

  return NextResponse.json(prediction)
}