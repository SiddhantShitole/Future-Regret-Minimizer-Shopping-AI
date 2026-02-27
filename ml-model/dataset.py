import numpy as np
import pandas as pd

def generate_data(samples=10000):
    data = []

    for _ in range(samples):
        user_budget = np.random.uniform(10000, 100000)
        past_avg_spending = np.random.uniform(1000, 30000)
        price = np.random.uniform(500, 80000)
        return_rate = np.random.uniform(0, 0.6)

        spending_deviation = abs(price - past_avg_spending) / past_avg_spending

        budget_stress = (price / user_budget) * 100

        regret_probability = (
            0.4 * budget_stress +
            0.3 * (spending_deviation * 100) +
            30 * return_rate
        )

        regret_probability = np.clip(regret_probability, 0, 100)

        satisfaction = 100 - regret_probability

        data.append([
            price,
            user_budget,
            past_avg_spending,
            return_rate,
            spending_deviation,
            regret_probability,
            budget_stress,
            satisfaction
        ])

    columns = [
        "price",
        "user_budget",
        "past_avg_spending",
        "return_rate",
        "spending_deviation",
        "regret_probability",
        "budget_stress",
        "satisfaction"
    ]

    return pd.DataFrame(data, columns=columns)