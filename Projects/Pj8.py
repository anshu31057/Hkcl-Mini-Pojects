# Compount Interest 
'''A = P(1+R/100)power(t)
 Compound Interest = A-P'''
def compound_interest(p,t,r):
    print("The principal is",p)
    print("The time period is",t)
    print(f"The rate of intrest is {r}")
    a = p*pow((1+r/100),t)
    ci = a-p
    print(f"The simple intrest is: {ci}")
    return ci
Ammount = int(input("Enter Ammount or Principal Ammount: "))
Time = int(input("Enter Time in Years: "))
Rate = int(input("Enter Rate : "))
compound_interest(p=Ammount,t=Time,r=Rate)
