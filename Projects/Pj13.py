# Bublle sort 
def bubblesort(list):
    for iter_num in range(len(list)-1,0,-1):
        for idx in range(iter_num):
            if list[idx]>list[idx+1]:
                temp=list[idx]
                list[idx]=list[idx+1]
                list[idx+1]=temp
list = [19,2,43,56,99,76,4440,121]
bubblesort(list)
print(list)