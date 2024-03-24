# Задача №337. Сумма цифр

# x=int(input())
# print(sum(map(int,str(x))))

x = int(input())
x_str = str(x)  # Convert number to string
sum = 0

for i in x_str:
    sum += int(i)  # Convert character to integer and add it to the sum

print(sum)  # Print the sum of digits