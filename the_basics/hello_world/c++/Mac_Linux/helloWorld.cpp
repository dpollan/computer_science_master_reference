// Basic Hello World application in C++

// Setup steps varies wildly from platform to platform and which compiler you are using.
// I find easiest way to compile on Linux is to download build essential
// Then compile using g++ compiler

// Run sudo apt-get update & sudo apt-get upgrade
// Run command sudo apt-get build-essential
// Navigate to folder containing helloWorld.cpp
// Use G++ to compile HelloWorld file
// g++ helloWorld.cpp -o HelloWorld
// Run the compiled command using ./HelloWorld
// If you see the output "Hello World!" your C++ environment is likely configured correctly 😊

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}