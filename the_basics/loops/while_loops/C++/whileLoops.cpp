#include <iostream>
#include <time.h>


int main() {

	srand(time(NULL));
	int i = 0;

	int number = 0;
	int guess = 0;
	int count = 0;

	while (i < 20) {
		std::cout << ++i << std::endl; // Output is numbers 1 thorugh 20
	}

	std::cout << std::endl;

// Basic guessing game

// Picks random numbers in a range and guesses and prints a new number until it guesses correctly
	std::cout << "Guessing Game" << std::endl;

	number = rand() % 20; // <-- Picks a random number from 1 to 20
	std::cout << "Random Number: " << number << std::endl;

	while (guess != number) {
		guess = rand() % 20;
		std::cout << "Guess " << ++count << ":   " << guess << std::endl;
	}

	std::cout << "Computer correctly guessed the number" << number << " in " << count << " tries" << std::endl;

	return 0;
}