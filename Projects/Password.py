import random
def gen_pass(n):
    char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
    password = ""
    for i in range(n):
        password += random.choice(char)
    
    return password
if __name__ == "__main__":
    n = int(input("Enter Size of Password: "))
    password = gen_pass(n=n)
    print("A randomly selected password is:",password)
