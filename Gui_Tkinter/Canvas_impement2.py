from tkinter import *
top = Tk()
top.geometry("300x300")
c=Canvas(top,bg="black",height="300",width="300")
arc=c.create_oval((60,60,210,210),fill="white")
c.pack()
top.mainloop()