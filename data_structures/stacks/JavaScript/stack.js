// Stack Data Structure

// A First In Last Out (FILO) data structure.  Basically you can only pull items off of the top of the tower, you cannot pull anything from the middle or bottom
// You can constantly add stuff to it but the more you add, the more you must remove to get to the item you need.
// This implementation has a optional maxSize parameter the user can enter to limit the number of possible entries

class Stack {
  constructor(maxSize) {
    this.maxSize = maxSize ? maxSize : Infinity;
    this.data = [];
  }
  push(item) {
    if (this.data.length >= this.maxSize) {
      throw "Stack Overflow";
    }
    this.data.push(item);
    return true;
  }
  pop() {
    if (this.data.length === 0) {
      throw "Stack Underflow";
    }
    let result = this.data.pop();
    return result;
  }
  size() {
    return this.data.length;
  }
}
