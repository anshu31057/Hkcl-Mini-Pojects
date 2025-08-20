# An armstrong number of 3 digits is the sum of cubers of each digit is equal to the number itself
num = int(input("Enter any number: "))
s = num
sum = 0
while num!=0:
    rem=num%10
    sum = sum+(rem*rem*rem)
    num=num//10
if s == sum:
    print("Given number is armstrong")
else:
    print("Number is not armstrong")
    