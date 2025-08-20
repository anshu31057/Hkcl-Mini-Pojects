# Permutation of given string 
from itertools import permutations
def allPermutations(str):
    permLIst=permutations(str)
    for perm in list(permLIst):
        print(''.join(perm))

if __name__=="__main__":
    str='ABC'
    allPermutations(str)