num = int((input("Enter numbers to get its factorial" )))
fact =1
if num == 0:
    print("Factorial of 0 is 1")
elif num<0:
    print("Factorail does not exist for negative numbers")
else:
    for i in range(1,num+1):
        fact =fact*i
    print(f"Factorail of {num} is {fact}")
