# Simple Interest 
'''Simple interest Fromula
    S.I= (PxRxT)/100'''

def simple_interest(p,t,r):
    print("The principal is",p)
    print("The time period is",t)
    print(f"The rate of intrest is {r}")
    si = (p*t*r)/100
    print(f"The simple intrest is: {si}")
    return si
Ammount = int(input("Enter Ammount or Principal Ammount: "))
Time = int(input("Enter Time in Years: "))
Rate = int(input("Enter Rate : "))
simple_interest(p=Ammount,t=Time,r=Rate)