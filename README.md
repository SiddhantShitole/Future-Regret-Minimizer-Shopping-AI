## 🚀 Future-Regret Minimizer Shopping AI

An AI-powered web application that predicts post-purchase regret probability before checkout and suggests lower-risk alternatives to help users make smarter financial decisions.

## 🧠 Problem Statement

Many consumers experience regret after purchases due to:

Impulse buying

Budget overspending

Behavioral deviation from past spending

Repeated return patterns

This project aims to predict regret risk before purchase using machine learning and provide actionable recommendations.

✨ Key Features

🔮 Regret Probability Prediction (0–100%)

💸 Budget Stress Score

📉 Long-Term Satisfaction Estimate

🧠 Behavioral explanation (“Why this score?”)

🔁 AI-suggested lower-regret alternative

⚡ Real-time ML inference

🎨 Modern AI-style UI

🏗 System Architecture
Frontend (Next.js - Vercel)
        ↓
Next.js API Route
        ↓
FastAPI Inference Server
        ↓
PyTorch TorchScript Model
Why Separate ML Server?

Vercel serverless functions do not support full PyTorch runtime

Enables scalable microservice architecture

Industry-standard ML deployment pattern

🛠 Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

pnpm

Backend (Inference)

FastAPI

PyTorch (TorchScript)

Uvicorn

ML Model

PyTorch

Multi-output regression

Synthetic behavioral dataset

AMD ROCm compatible

Database (Planned)

Supabase (Free tier)

Deployment

Vercel (Frontend)

Render / Railway (ML backend)

📊 Machine Learning Overview
Input Features

Product price

User budget

Past average spending

Return rate

Spending deviation

Outputs

Regret Probability (0–100%)

Budget Stress Score (0–100%)

Long-Term Satisfaction (derived as 100 − regret)

Model Type

Multi-output regression

Fully connected neural network

Trained on synthetic behavioral dataset

Exported via TorchScript for production inference

📁 Project Structure
Future-Regret-Minimizer/
│
├── app/                  # Next.js frontend
├── components/           # UI components
├── lib/                  # Utility logic
├── ml-model/             # Training code
│   ├── dataset.py
│   ├── model.py
│   ├── train.py
│   └── regret_model.pt
│
├── ml-inference/         # FastAPI server
│   ├── main.py
│   ├── requirements.txt
│   └── regret_model.pt
│
└── README.md
⚙️ Running Locally
1️⃣ Start ML Inference Server
cd ml-inference
python -m uvicorn main:app --reload

Runs at:

http://127.0.0.1:8000

Swagger Docs:

http://127.0.0.1:8000/docs
2️⃣ Start Frontend
pnpm dev

Runs at:

http://localhost:3000
📈 Example Prediction

Input:

{
  "price": 20000,
  "user_budget": 50000,
  "past_avg_spending": 15000,
  "return_rate": 0.2,
  "spending_deviation": 0.3
}

Output:

{
  "regret_probability": 19.57,
  "budget_stress": 28.1,
  "satisfaction": 80.43
}
🔍 How It Works

User enters product & financial data.

Frontend sends request to backend.

FastAPI loads TorchScript model.

Model predicts regret metrics.

Business logic enforces logical constraints.

UI displays:

Risk meter

Explanation

Alternative recommendation

🎯 Use Cases

E-commerce decision support

Financial wellness apps

Impulse buying prevention tools

Behavioral spending analytics

Smart checkout assistants

🚀 Future Improvements

Real user behavioral tracking (Supabase)

Personalized regret modeling per user

Reinforcement learning adaptation

ONNX optimization for lighter inference

Real product scraping integration

LLM-generated behavioral explanations

🏆 Hackathon Value

This project demonstrates:

Full-stack AI integration

Real ML model training

TorchScript production deployment

Microservice architecture

Zero-budget scalable setup

AMD ROCm compatible training

👨‍💻 Author

Siddhant Shitole
AI & Embedded Systems Enthusiast