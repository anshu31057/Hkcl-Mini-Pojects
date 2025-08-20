# Anagrams strings (Two strings are said to be anagrams if they make a meaningful word by rearranging or shuffling the letters of the sting)
from collections import Counter
def check(s1,s2):
    if (Counter(s1)==Counter(s2)):
        print("The strings are anagrams")
    else:
        print("The stings are not anagrams")

s1=input("Enter word one: ")
s2=input("Enter word two: ")
check(s1,s2)
