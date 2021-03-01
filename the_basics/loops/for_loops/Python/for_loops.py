# Basic loop construction in Python

# Create some basic colletions
listOfNumbers = [1,2,3,4,5,6,7,8,9,10]
tupleOfCities = ("Chicago", "New York", "Paris", "London", "Tokyo")
collectionOfCars = {
    "Toyota" : "Corolla",
    "Subaru": "Forester",
    "Honda" : "Civic",
    "Jeep" : "Wrangler",
    "Ford" : "Mustang"
}
line_break = "\n"

# Note we do not have a basic for loop in python the way we do in other languages because the for (_initialization_; _condition_; _doThisForEachIteration) pattern does not work
# Instead we can only use for in loops.  In this case to match other for loop examples, I've included a range of numebrs for the iteration.

# -----------------BASIC LOOP-----------------------------------
for i in range(1,10):
    print(i) # <--  Output is numbers 1 through 10
print(line_break)

#-----------------COLLECTIONS LISTS TUPLES-----------------------

# Iterate through a list
for i in listOfNumbers:
    print(listOfNumbers[i - 1]) # <-- Output is numbers 1 through 10, notice we have to subtract 1 from i since list is zero indexed
print(line_break)

# Iterate through a tuple
for city in tupleOfCities:
    print(city) #<-- Output is all five cities listed in tuple
print(line_break)

#------------------COLLECTIONS DICTIONARIES ----------------------
for car in collectionOfCars:
    print(f"Make: {car}    Model: {collectionOfCars[car]}")
print(line_break)

