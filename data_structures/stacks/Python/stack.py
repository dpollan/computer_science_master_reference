# Stack Data Structure

# A First In Last Out (FILO) data structure.  Basically you can only pull items off of the top of the tower, you cannot pull anything from the middle or bottom
# You can constantly add stuff to it but the more you add, the more you must remove to get to the item you need.
# This implementation has a optional maxSize parameter the user can enter to limit the number of possible entries

import math

class Stack:
    data = []
    max_size = 0
    def __init__(self, size=math.inf):
        self.max_size = size
    def push(self, item):
        if ( len( self.data ) >= self.max_size ):
            raise IndexError("Stack Overflow")
        self.data.append(item)
        return True
    def pop(self):
        if (len(self.data)  == 0):
            raise IndexError("Stack Underflow")
        top_item = self.data[ len(self.data) - 1 ]
        del self.data[ len(self.data) - 1 ]
        return top_item
    def size(self):
        return len(self.data)
