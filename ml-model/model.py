import torch
import torch.nn as nn

class RegretModel(nn.Module):
    def __init__(self):
        super(RegretModel, self).__init__()

        self.network = nn.Sequential(
            nn.Linear(5, 64),
            nn.ReLU(),
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, 3)
        )

    def forward(self, x):
        return self.network(x)