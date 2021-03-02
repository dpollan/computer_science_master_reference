# Basic While Loop in Python
import random

i = 0

number = 0
guess = 0
count = 0

while (i < 20):
    print(i)
    i = i + 1

# Basic guessing game

# Picks random numbers in a range and guesses and prints a new number until it guesses correctly
number = random.randint(1,20) # <-- Picks a random number between 1 and 20
print(f"Random Number: {number}")

while (guess != number):
    guess = random.randint(1,20)
    print(f"Guess {count}: {guess}")
    count = count + 1

print(f"Computer correctly guessed the number {number} in {count} tries")





