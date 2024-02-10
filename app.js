from tkinter import * 
from tkinter import filedialog 
import tkinter as tk 
from PIL import Image, ImageTk 
import os 
from stegano import lsb 
window = Tk() 
window.title("CS Company") 
window.geometry("550x650") 
window.configure(bg='black') 
def openImage(): 
global fname 
fname = filedialog.askopenfilename(initialdir=os.getcwd(), 
title="Select Image File", 
filetype=(('PNG file',"*.png"), 
('JPG File',"*.jpg"), 
("All file","*.txt"))) 
img=Image.open(fname) 
img=ImageTk.PhotoImage(img) 
lb1.configure(image=img,width=270,height=250) 
lb1.image=img 
def hideImage(): 
secret.save("hidden.png") 
txt1.delete(1.0,END) 
def showMsg(): 
cl_msg = lsb.reveal(fname) 
txt1.insert( END,cl_msg) 
def hideMsg(): 
global secret 
msg = txt1.get(1.0,END) 
secret = lsb.hide(str(fname), msg) 
Label(window,text="Steganography Security System",bg="#2d4155",fg="white",font="Arial 20 bold").place(x=80,y=50)
f1=Frame(window, bd=3,bg="#4682B4",height=300,width=350,relief=GROOVE) f1.place(x=100,y=100) 
f2=Frame(window, bd=3,bg="white",height=75,width=350,relief=GROOVE) f2.place(x=100,y=410) 
lb1=Label(f1,bg='white') 
lb1.place(x=30,y=15) 
b1=Button(f2, text="Open Image",fg='white', width=23, 
height=4,bg='black',command=openImage).place(x=0,y=0) 
b2=Button(f2, text="Save Image",fg='white', width=24, 
height=4,bg='black',command=hideImage).place(x=170,y=0) 
txt1=Text(window,font="Arial 30",bg="#4682B4",fg="Black") txt1.place(x=100,y=490,width=350,height=50) 
f3=Frame(window, bd=3,bg="white",height=75,width=350,relief=GROOVE) f3.place(x=100,y=550) 
b1=Button(f3, text="Show Msg",fg='white', width=23, 
height=4,bg='black',command=showMsg).place(x=0,y=0) 
b2=Button(f3, text="Hide Msg",fg='white', width=24, 
height=4,bg='black',command=hideMsg).place(x=170,y=0) 
sb1=Scrollbar(f2) 
sb1.place(x=0,y=320,height=300) 
sb1.configure(command=txt1.yview) 
txt1.configure(yscrollcommand=sb1.set) 
window.mainloop()
