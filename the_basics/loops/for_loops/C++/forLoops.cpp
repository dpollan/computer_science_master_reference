#include <iostream>
#include <vector>
#include <map>

int main() {

    // Create some basic collections
    std::vector<int> vectorOfNumbers(10); // <-- vector is similar to a JavaScript Array or a Python List, memory is allocated dynamically and iteratorVector has many built in methods
    std::vector<int>::iterator iteratorVector; // <-- Declare the iterator as a pointer to a vector collection storing int values

    std::map<std::string, std::string> mapOfCars;
    mapOfCars["Toyota"] = "Corolla";
    mapOfCars["Subaru"] = "Forester";
    mapOfCars["Honda"] = "Civic";
    mapOfCars["Jeep"] = "Wrangler";
    mapOfCars["Ford"] = "Mustang";
    std::map<std::string, std::string>::iterator iteratorMap; // <-- Declare the iterator as pointer to a map collection storing string keys and string values

    //------------------ BASIC LOOP -----------------------------

    std::cout << "Basic Loop" << std::endl;

    for (int i = 1; i <= 10; i++) {
        std::cout << "No collection:   " << i << std::endl; // <-- Output is numbers 1 through 10
    }
    std::cout << std::endl;



    // Populate vector with numbers 1 to 10 using for loop
    for (int i = 1; i <= 10; i++) {
        vectorOfNumbers[i - 1] = i; // <-- using the same loop above to populate a vector collectionOfNumbers
    }

    //------------------COLLECTIONS VECTORS ------------------------

    std::cout << "Vectors" << std::endl;

    // Print all values in vectorOfNumbers using basic for loop
    for (unsigned i = 0; i < vectorOfNumbers.size(); i++) {
        std::cout << "Using index: " << vectorOfNumbers[i] << std::endl;
    }
    std::cout << std::endl;

    // Print all values in vectorOfNumbers using iterator
    for (iteratorVector = std::begin(vectorOfNumbers); iteratorVector != std::end(vectorOfNumbers); ++iteratorVector) {
        std::cout << "Using iterator: " << *iteratorVector << std::endl;
    }
    std::cout << std::endl;

    //-------------------COLLECTIONS MAP ---------------------------

    // Iterate through a collection

    std::cout << "Map" << std::endl;

    for (iteratorMap = mapOfCars.begin(); iteratorMap != mapOfCars.end(); ++iteratorMap) {
        std::cout << "Make: " << iteratorMap->first << "   Model: " << iteratorMap->second << std::endl;
    }
    std::cout << std::endl;

    return 0;
}