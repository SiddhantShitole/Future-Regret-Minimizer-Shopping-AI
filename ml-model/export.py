import torch
from model import RegretModel

model = RegretModel()
model.load_state_dict(torch.load("regret_model.pth"))
model.eval()

example_input = torch.randn(1, 5)
traced = torch.jit.trace(model, example_input)
traced.save("regret_model.pt")

print("TorchScript model exported.")