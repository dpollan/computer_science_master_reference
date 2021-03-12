// Priority Queue

// A priority queue is a data structure that functions much like a FIFO (First In First Out) queue but also uses priority to determine what to process next
// Think of a ride at a theme park.  You are in line but if someone purchased an express pass, they get processed before you even though you showed up first. They have higher priority. Now imagine even more tiers, imagine people who didn't pay admission to the park can ride all the rides as well, but only after all paying customers get processed through the line. You might see how delux express super elite pass users get processed first, then express pass, then regular customers then everyone else. It's not a perfect analogy but it's a way to think about and visualize priority queues.
// Note that in this implementation a higher priority.

// This implementation of priority queue also accepts optional max_size to limit total number of possible entries and requires a valid priority to enqueu an item

class PriorityQueue_Item {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
    if (typeof this.priority !== "number") {
      throw "Invalid Priority";
    }
  }
}

class PriorityQueue {
  constructor(max_size) {
    this.data = [];
  }
  enqueue(item, priority) {
    if (this.data.length >= this.max_size) {
      throw "Queue Overflow";
    }
    var item_to_enqueue = new PriorityQueue_Item(item, priority);
    var isEntered = false;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].priority > item_to_enqueue.priority) {
        this.data.splice(i, 0, item_to_enqueue);
        isEntered = true;
        break;
      }
    }

    if (!isEntered) {
      this.data.push(item_to_enqueue);
    }
  }
  dequeue() {
    if (this.data.length === 0) {
      throw "Queue Underflow";
    }
    let highestPriorityItem = this.data.pop();
    return highestPriorityItem.item;
  }
}
