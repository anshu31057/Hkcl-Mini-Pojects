import random
when=['A few year ago','Yesterday','Last night','A long time ago', 'On 20th Jan ']
who= ['a rabbit','an elephant','a mouse','a turtle','a cat']
name= ['Ali', 'Raj','daniel', 'Hoouk','Sarwalker']
residence=['Venice','India','Germany','England']
went= ['cinema','university','seminar','school','laundry']
happened=['Made a lot of friends','Eats a burger', 'found a secret key','solved a mistery']


print(f'{random.choice(when)} {random.choice(who)} that lived in  {random.choice(residence)}, went to the {random.choice(went)} and {random.choice(happened)}')