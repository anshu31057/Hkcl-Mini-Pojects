#palindrom strings
num = int(input("Enter number: "))
temp = num
rev = 0
while(num>0):
    dig=n%10
    rev=rev*10+dig
    n=n//10
if(temp==rev):
    print("The number is a palindrome!")
else:
    print("The number isn't a palindrome!")