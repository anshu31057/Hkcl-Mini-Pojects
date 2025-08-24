from tkinter import *
parent = Tk()
parent.geometry("200x200")
checkvar1= IntVar()
checkvar2= IntVar()
checkvar3= IntVar()
checkbtn1=Checkbutton(parent,text="C",variable=checkvar1,onvalue=1,offvalue=0,height=2,width=10)
checkbtn2=Checkbutton(parent,text="C++",variable=checkvar2,onvalue=1,offvalue=0,height=2,width=10)
checkbtn3=Checkbutton(parent,text="Java",variable=checkvar3,onvalue=1,offvalue=0,height=2,width=10)
checkbtn1.pack()
checkbtn2.pack()
checkbtn3.pack()
parent.mainloop()

