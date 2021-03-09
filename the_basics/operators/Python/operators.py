# Python Operators



# I've tried to map each operator to the symbol representing it in a logical order
# often the resulting action in an operator in Python will vary by the context in which it is used.
# For this reason, I've decided to try to display all instances of this symbol continuously in one place
# Before moving on to the next symbol.  For instance + for Sting concatination and += for assignment addition are all
# Recorded in the same place on this document as they both involve the + character.

# Declare all variables, initially unassigned
num_int_1 = int()
num_int_2 = int()
num_float_1 = float()
num_float_2 = float()
str1 = str()
str2 = str()
result = str()

# + Operator
print('_______________________ Plus Operator _________________________')

# Arithmetic Addition
num_int_1 = 7
num_int_2 = 2
print(f"\nMathmatecal Addition: 7 + 2")
print(num_int_1 + num_int_2)  # <-- 9

# String Concatination
str1 = "Hello"
str2 = "World"
print(f'\nString Concatination: "Hello" + "World"')
print(str1 + str2); # <-- HelloWorld

# There is no implicit string coercion in Python, if you attempt to add a string to a float or int you get a TypeError
# However if you attempt to add two strings that are numbers without explicitly coercing them contatenation occurs instead of numbers
num_int_1 = "7"
num_int_2 = "2"
print(f'\nOops, gotcha: "7" + "2"')
print(num_int_1 + num_int_2) # <-- 72

# Unfortunately Python has no Increment or Decrement Operators.
# Instead you must manually increment using the Assignment Addition Operator
# You would just say "num_int_1 += 1" instead of "num_int_1++" to add one

# Assignment Operator
num_int_1 = 7
num_int_1 += 5 # Basically shorthand for num_int_1 = num_int_1 + 5
print(f'\nAssignment Operator Addition: 7 += 5') 
print(num_int_1) # <-- 12

# There is implicit type coersion for int to float in Python so adding an int to a float will convert the float to an int when adding
# Booleans will also coerce as shown by the example below, this works for regular addition as well as assignment operator
num_int_1 = 7
num_float_1 = 1.5
num_int_1 += num_float_1
print("\nCoercion from int to float: 7 + 1.5")
print(num_int_1)

num_int_1 = 7
num_int_2 = True
num_int_1 += num_int_2 # Adds 1, the value True coerces to 1 or 1.0 and False coerces to 0 or 0.0 value
print("\nCoercion from boolean to int")
print(num_int_1) # <--8

# Assignment Operator also works with String concatination
str1 = "Hello "
str2 = "World!"
str1 += str2
print('Assignment Operator String Concatination: "Hello " + "World!"')
print(str1)

