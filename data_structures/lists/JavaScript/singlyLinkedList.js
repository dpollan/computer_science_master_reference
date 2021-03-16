// Singly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Assume end of list
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(data) {
    var entry = new Node(data);

    if (this.head === null) {
      this.head = entry;
      this.tail = this.head;
    }
    this.tail.next = entry;
    this.tail = entry;
    this.length++;
  }
  contains(target) {
    var current = this.head;
    while (current !== null) {
      if (current.data === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  searchAndRemove(target) {
    // If the list is empty return null
    if (this.length === 0) {
      return null;
    }

    // Start at head of list
    var current = this.head;

    // Check if the head of the list is the target and remove it
    if (current.data === target) {
      this.head = current.next; // <-- This will be null if it's a 1 item list
      this.length--; // <-- Decrement count to account for losing a item
      if (this.count === 0) {
        this.tail = null;
      }
      return current.data; // <-- Old head will be removed by garbage collection in JS
    }

    // Traverse the list checking each node for the target and remove if it exists
    while (current !== this.tail) {
      // Look at the next item after current to see if it is the target
      if (current.next.data === target) {
        let result = current.next.data; // <-- Save the data in item after current
        if (current.next === this.tail) {
          this.tail = current;
        }
        current.next = current.next.next; // <-- Change current next to point at the item after
        this.length--; // <-- decrement length to account for losing an item
        return result;
      }
      current = current.next;
    }
    return null; // <-- return null if item target is not found
  }
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
    return true;
  }
}
