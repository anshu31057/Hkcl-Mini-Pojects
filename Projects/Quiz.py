def check_guess(guess,answer):
    global score
    stil_guessing = True
    attempt = 0
    while stil_guessing and attempt<3:
        if guess.lower()==answer.lower():
            print("Correct Answer")
            score=score+1
            stil_guessing=False
        else:
            if attempt<2:
                guess=input("Sorry Wrong Answer, Try Again!\n:")
                attempt=attempt+1
        if attempt == 3:
            print("The Correct answer is:",answer)
    
score=0
print("Guess the animal")
guess1= input("Which bear lives at the North Pole?\n:")
check_guess(guess1,"polar bear")
guess2 = input("Which is the fasters land animal?\n:")
check_guess(guess2,"Cheetah")
guess3 = input("Which is the largerst animal?\n:")
check_guess(guess3,"Blue whale")
print("Your Score is "+ str(score))