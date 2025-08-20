Height = float(input("Enter your height in centimeters: "))
Weight = float(input("Enter your weight in kg: "))
Height = Height/100
BMI = Weight/(Height*Height)
print("Your Body mass index is: ",BMI)
if(BMI>0):
    if(BMI<=16):
        print("Your are severely Underweight")
    elif(BMI<=18.5):
        print("Your are Underweight")
    elif(BMI<=25):
        print("You are Healthy")
    elif (BMI<=30):
        print("You are Overweight")
    else:
        print("You are Seveverly Overwight")
else:
    print("Enter Valid Details")
    