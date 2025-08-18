def distance(s1,s2):
    if len(s1)<len(s2):
        return distance(s2,s1)
    if len(s2)==0:
        return len(s1)
    prervious_row=range(len(s2)+1)
    for i,c1 in enumerate(s1):
        current_row=[i+1]
        for j,c2 in enumerate(s2):
            insertions=prervious_row[j+1]+1 
            deletions = current_row[j]+1 
            substitutions = prervious_row[j] + (c1 != c2) 
            current_row.append(min(insertions,deletions,substitutions))
            prervious_row=current_row
            return prervious_row[-1]
        
def check_plagiarism(text1,text2,threshold):
    distance1=distance(text1.lower(),text2.lower())
    similarity=1-(distance1/max(len(text1),len(text2)))
    if similarity>= threshold:
        print("The text are similar(similarity score: {}))".format(similarity))
    else:
        print("The texts are not similar(similarity score:{})".format(similarity))
text1= input("Enter First String\n:")
text2= input("Enter Second string\n:")        
threshold = 0.8
check_plagiarism(text1=text1,text2=text2,threshold=threshold)