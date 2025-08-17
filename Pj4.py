def fibbonacii(num):
    if num==0:
        return 0
    elif num==1:
        return 1
    else:
        return (fibbonacii(num-2)+fibbonacii(num-1))
    
num = int(input("Enter range: "))
for i in range(0,num):
    print(fibbonacii(i))