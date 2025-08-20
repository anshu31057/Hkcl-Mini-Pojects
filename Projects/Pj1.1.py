def factorial(num):
    if num == 1 or num ==0:
        return 1 
    else:
        return num*factorial(num-1)
        
num = int((input("Enter numbers to get its factorial: " )))
fact =1

if num<0:
    print("Factorail does not exist for negative numbers")
else:
    result = factorial(num)
    print(f"Factorail of {num} is {result}")
