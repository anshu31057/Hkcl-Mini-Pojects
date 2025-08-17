def add(s,r):
    return s+r
def subtract(s,r):
    return s-r
def multiply(s,r):
    return s*r
def devide(s,r):
    return s/r

print("Please select the operation")
print("a. Add")
print("b. Subtract")
print("c. Multiply")
print("d. Divide")
Choice = input("Please enter the Choice (a/ b/ c/ d)")
num_1 = int(input("Enter the First Number: "))
num_2 = int(input("Enter the Second Number: "))

if Choice == 'a':
    print(num_1,'+',num_2, '=',add(num_1,num_2))
elif Choice =='b':
    print(f'{num_1}-{num_2} = {subtract(num_1,num_2)}')
elif Choice == 'c':
    print(f'{num_1}x{num_2}= {multiply(num_1,num_2)}')
elif Choice == 'd':
    if num_2 == 0:
        print("Not defined!!!!")
    else:
        print(f'{num_1}/{num_2}={devide(num_1/num_2)}')

else:
    print("Invalid Option Added")