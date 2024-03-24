# Задача №338. Переверни число

x=int(input())
x_str = str(x)  # Convert number to string
res = ""

for i in reversed(x_str):
    res += i  # Concatenate each character to the res variable

flipped_x = int(res)  # Convert the res variable back to an integer

print(flipped_x)  # Print the flipped number