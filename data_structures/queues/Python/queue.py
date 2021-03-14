# Queue

# This is a basic FIFO (First In First Out) data structure.  As the name implies, it is comprable to a queue or line.  If you pull into a drive-through they take your order.  The people who arrived before you get processed before you and those behind you in line get processed after you.  A queue works the same way.
# This implementation has a optional maxSize parameter the user can enter to limit the number of possible entries

import math

class Queue:
    data = []
    max_size = 0
    def __init__(self, size=math.inf):
        self.max_size = size
    def enqueue(self, item):
        if (len(self.data) >= self.max_size):
            raise IndexError("Queue Overflow")
        self.data.append(item)
        return True
    def dequeue(self):
        if (len(self.data) == 0):
            raise IndexError("Queue Underflow")
        front_item = self.data[0]
        del self.data[0]
        return front_item
    def size(self):
        return len(self.data)