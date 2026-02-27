import torch

model = torch.jit.load("regret_model.pt")
model.eval()

sample_input = torch.tensor([[20000, 50000, 15000, 0.2, 0.3]])

with torch.no_grad():
    output = model(sample_input)

print("Prediction:", output)