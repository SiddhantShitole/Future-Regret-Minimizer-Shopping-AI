### 🚀 Future-Regret Minimizer Shopping AI

An AI-powered full-stack web application that predicts post-purchase regret probability before checkout and suggests lower-risk alternatives based on user financial behavior.

## 🧠 Overview

Many consumers regret purchases due to:

✔ Impulse buying

✔ Budget overspending

✔ Spending pattern deviation

✔ Frequent return behavior

This system predicts regret risk before checkout and provides actionable recommendations.

## 🏗 System Architecture

Next.js Frontend (Vercel)
        ↓
Next.js API Route
        ↓
FastAPI ML Inference Server
        ↓
PyTorch TorchScript Model

## Why Separate ML Backend?

Serverless platforms do not support full PyTorch runtime

Enables scalable microservice design

Follows industry AI deployment standards

## 🛠 Tech Stack

# Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

pnpm

# Backend (Inference)

FastAPI

PyTorch (TorchScript)

Uvicorn

# ML Model

Multi-output regression

Synthetic behavioral dataset

AMD ROCm compatible training

# Deployment

Vercel (Frontend)

Render / Railway (ML Backend)

## 📁 Project Structure

.
├── app/                  
├── components/           
├── lib/                  
├── types/                
├── ml-model/             
│   ├── dataset.py
│   ├── model.py
│   ├── train.py
│   └── regret_model.pt
├── ml-inference/         
│   ├── main.py
│   ├── requirements.txt
│   └── regret_model.pt
└── README.md

## ⚙️ Running Locally

1️⃣ Start ML Inference Server

cd ml-inference
python -m uvicorn main:app --reload

## 2️⃣ Start Frontend

From project root:

pnpm dev


## 🔍 How It Works

User enters product and financial details

Frontend sends request to backend

FastAPI loads TorchScript model

Model predicts regret metrics

Outputs are bounded between 0–100

UI displays risk meter and recommendation

## 🎯 Use Cases

Smart e-commerce checkout assistant

Financial wellness applications

Impulse buying prevention

Behavioral spending analytics

## 🚀 Future Improvements

Supabase user behavior storage

Personalized regret modeling

ONNX optimization

LLM-generated explanations

Real product API integration

## 🏆 Highlights

Full-stack AI integration

Real ML training pipeline

TorchScript production deployment

Microservice architecture

Zero-budget scalable setup

AMD ROCm compatible

## 👨‍💻 Author

Siddhant Shitole
AI & Systems Developer