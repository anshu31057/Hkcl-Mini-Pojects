class Student:
    def __init__(self,name):

        self.name = name
        self.marks = []
    def add_marks(self,marks):
        self.marks.append(marks)
    def cal_avg_mrk(self):
        totoal = sum(self.marks)
        return totoal/len(self.marks)
    def display_report(self):
        average_marks=self.cal_avg_mrk()
        print("Student name:" , self.name)
        print("Student subject marks: ",self.marks)
        print("Average Marks: ",average_marks)
        print("\n")
students = []

while True:
    print("Enter Student Name (or 'exit' to stop):")
    name = input()
    if name == 'exit':
        break
    student=Student(name)
    for i in range(1,6):
        print("Enter marks for subject",i,"Out of 100:")
        marks= int(input())
        student.add_marks(marks)
    students.append(student) 
for student in students:
    student.display_report()