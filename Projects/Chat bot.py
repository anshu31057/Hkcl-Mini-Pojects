import time 
import random
import sys

def typing(text, speed=0.05):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(speed)
    print()  # next line
name = input("Hello, What is your name?\n:")

time.sleep(1)
typing("Hello " +name)

feeling = input("How are you today?\n:")

time.sleep(1)
if "good" in feeling.lower():
    typing("I am feeling good too!")
else:
    typing("I am sorry to hear that!")

time.sleep(1)
favcolor = input("What is your Favourite Colour?\n:")

colours = ["Red","Green","Blue"]
time.sleep(1)
bot_colour = random.choice(colours)

if favcolor == bot_colour.lower():
    typing(f"Great,{favcolor} is also my favourite")
else:
    typing(f"Ohh Great, My favourtie colour is {bot_colour}")