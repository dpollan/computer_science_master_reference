// Queue

// This is a basic FIFO (First In First Out) data structure.  As the name implies, it is comprable to a queue or line.  If you pull into a drive-through they take your order.  The people who arrived before you get processed before you and those behind you in line get processed after you.  A queue works the same way.
// This implementation has a optional maxSize parameter the user can enter to limit the number of possible entries

class Queue {
  constructor(max_size) {
    this.max_size = max_size ? max_size : Infinity;
    this.data = [];
  }
  enqueue(item) {
    if (this.data.length >= this.max_size) {
      throw "Queue Overflow";
    }
    this.data.push(item);
    return true;
  }
  dequeue() {
    if (this.data.length === 0) {
      throw "Queue Underflow";
    }
    return this.data.shift();
  }
  size() {
    return this.data.length;
  }
}
