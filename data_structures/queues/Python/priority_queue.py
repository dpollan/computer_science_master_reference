# Priority Queue

# A priority queue is a data structure that functions much like a FIFO (First In First Out) queue but also uses priority to determine what to process next
# Think of a ride at a theme park.  You are in line but if someone purchased an express pass, they get processed before you even though you showed up first. They have higher priority. Now imagine even more tiers, imagine people who didn't pay admission to the park can ride all the rides as well, but only after all paying customers get processed through the line. You might see how delux express super elite pass users get processed first, then express pass, then regular customers then everyone else. It's not a perfect analogy but it's a way to think about and visualize priority queues.
# Note that in this implementation a higher priority.

# This implementation of priority queue also accepts optional max_size to limit total number of possible entries and requires a valid priority to enqueu an item

import math

class PriorityItem:
    def __init__(self, item, priority):
        self.item = item
        self.priority = int(priority)

class PriorityQueue:
    def __init__(self, max_size = math.inf):
        self.data = []
        self.max_size = max_size
    def enqueue(self, item, priority):
        if (len(self.data) > self.max_size):
            raise IndexError("Queue Overflow")
        item_to_enqueue = PriorityItem(item, priority)
        is_entered = False
        for index in range(0, len(self.data)):
            if self.data[index].priority > item_to_enqueue.priority:
                self.data.insert(index, item_to_enqueue)
                is_entered = True
                break
        if not is_entered:
            self.data.append(item_to_enqueue)
        return True
    def dequeue(self):
        if len(self.data) == 0:
            raise IndexError("Queue Underflow")
        highest_priority_item = self.data.pop()
        return highest_priority_item.item
    def size(self):
        return len(self.data)

