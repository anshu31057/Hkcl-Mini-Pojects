# Prime number 
start_range = int(input("Enter starting range: "))
end_range = int(input("Enter ending range: "))
print("All prime numbers between given range are: ")
for num in range(start_range,end_range):
    if num>1:
        for i in range(2,num):
            if (num%i==0):
                break
        else:
            print(num)