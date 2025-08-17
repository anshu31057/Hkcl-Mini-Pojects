import random
player1 = input("Select Rock, Paper, or Scissor: ").lower()
bot = random.choice(["Rock","Paper","Scissor"]).lower()
print("Bot selected: ",bot)
if player1== "rock" and bot == "paper":
    print("Bot Won!!")
elif player1=="paper" and bot =="scissor":
    print("Bot Won!!")
elif player1 == "scissor" and bot == "rock":
    print("Bot Won!!")
elif player1 == bot:
    print("Tie")
else:
    print("Player 1 Won!!!")
    