# Задача №67. Есть ли два элемента с одинаковыми 
# знаками
n = int(input())
a = input().split(" ")

for i in range(1, n):
    if int(a[i])*int(a[i-1]) > 0:
        print("YES")
        break
else:
    print("NO")