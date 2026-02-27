import torch
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from sklearn.model_selection import train_test_split
from dataset import generate_data
from model import RegretModel

# Generate dataset
df = generate_data(20000)

X = df.iloc[:, 0:5].values
y = df.iloc[:, 5:8].values

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

X_train = torch.FloatTensor(X_train)
y_train = torch.FloatTensor(y_train)

train_dataset = TensorDataset(X_train, y_train)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)

model = RegretModel()
criterion = torch.nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
for epoch in range(50):
    for inputs, targets in train_loader:
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, targets)
        loss.backward()
        optimizer.step()

    if epoch % 10 == 0:
        print(f"Epoch {epoch}, Loss: {loss.item()}")

torch.save(model.state_dict(), "regret_model.pth")
print("Model saved.")
with torch.no_grad():
    X_test = torch.FloatTensor(X_test)
    y_test = torch.FloatTensor(y_test)
    predictions = model(X_test)
    test_loss = criterion(predictions, y_test)
    print("Test Loss:", test_loss.item())