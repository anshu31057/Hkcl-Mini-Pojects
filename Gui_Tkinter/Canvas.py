from tkinter import *
parent = Tk()
# Synatx
# w = Canvas(parent,option)

#bd--> represents the border width
c = Canvas(parent,bd=10)
# bg--> represent the background color of the canvas
c = Canvas(bg="pink")
# confine--> make the canvas unscrollable outside the scroll region.
c=Canvas(confine=True)
# cursor--> the cursor is used as the arrow,circle ,dot ,etc. on the canvas
c = Canvas(cursor="circle")
# height --> size of the canvas in the vertical direction
c = Canvas(height=100)
# highlightcolor--> highlight color when the widget is focused.
c = Canvas(highlightcolor="red")
# relief-->type of the border the possible values are sunken,raised,groove and ridge
c =Canvas(relief="raised")
# scrollregion--> corrdinates specified as the tuple containing the area of the canvas
c = Canvas(scrollregion=10)
# width--> widht of the canvas
#xscrollincrment--> the canvas is placed only to the multiple of this value.
c =Canvas(xscrollincrement=18)
# xscrollcomand --> if the canvas is scrollable this attribute should the .set() method of the horizontal scrollbar.
c = Canvas(xscrollcommand=29)
# yscrollincrement--> works like xscrollincrement but governs vertical movement.
# yscrollcommand --> if the canvas is scrollable, this attribute should the .set() method of the vertical scrollbar.
