# Binary to ASCII value converter 
# by using b2a_uu 
import binascii

Text =b"Python for everyone"
Ascii = binascii.b2a_uu(Text)
print(Ascii)

decode = binascii.a2b_uu(Ascii)
print(decode)