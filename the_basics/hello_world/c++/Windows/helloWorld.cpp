// Basic Hello World application in C++

// Setup varies wildly from platform to platform and which compiler you are using.
// I find easiest way to compile on windows is Visual Studio community edition.

// Download and install Visual Studio Community Edition
// https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16
// Create a new project
// Create a new source file with the following code
// Select build solution to Build the HelloWorld.exe file
// File output will be located in c:\Users\<YOUR USER NAME>\repos\<YOUR PROJECT NAME>\Debug\ folder by default when installing VS
// Enter CMD and navigate to above directory
// Run the command helloWorld.exe and if you see "Hello World!" on your screen environment is set up correctly


#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}