from tkinter import *
test = Tk()
# active background-->  Back ground of the button
b1=Button(test,activebackground="pink",text="Button")
#active forground--> Font color of the button when mouse hover the button
b1=Button(activeforeground="red")
# Bd--> Border width in pixels
b1 = Button(bd=200)
# Bg--> Background color of the button.
b1=Button(bg=400)
# Command--> It is set to the function call
b1= Button(command=function)
# Fg --> Foreground colour of the Button
b1= Button(fg="blue")
# Font--> The font of the button
# Height--> The height of the button
b1= Button(height=200)
# Highlightcolor--> The color of the highlight.
b1= Button(highlightcolor="red")
# Image = Image displayed on the button.
b1= Button(image="bla/bla")
#justify--> Multiple text lines are represented
b1=Button(justify="center")
# padx--> padding to the button in the horizontal direction
# pady--> padding to the button in the vertical direction
b1=Button(padx=2,pady=3)
#Relief--> Type of the border SUNKEN,RAISED,GROOVE, and RIDGE
b1= Button(relief="sunken")
#state-->  DISABLED to make the button unresponsive     ACTIVE represent the active state of the button
b1= Button(state=DISABLED)
b1= Button(state=ACTIVE)
#underline--> make the button text underlined 
#weidth--> width of the button
b1=Button(width=100)
#wraplenght --> the text lines will be wrapped to fit within this length
b1=Button(wraplength=15)

test.mainloop()
