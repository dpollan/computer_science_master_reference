# Singly Linked List

class Node:
    data = ""
    next = None
    def __init__(self, data):
        self.data = data
        self.next = None

class Linked_List:
    head = None
    tail = None
    length = 0
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    def insert(self, data):
        entry = Node(data)
        if (self.head == None):
            self.head = entry
            self.tail = self.head
        self.tail.next = entry
        self.tail = entry
        self.length += 1
    def contains(self, target):
        current = self.head
        while ( current != None):
            if (current.data == target):
                return True
            current = current.next
        return False
    def search_and_remove(self, target):
        # If the list is empty return None
        if (self.length == 0):
            return "The List is Empty"
        # Start at the head of the list
        current = self.head
        # Check if the head of the list is the target and remove it if so
        if ( current.data == target ):
            self.head = self.head.next
            self.length -= 1
            if (self.length == 0 ):
                self.tail = None
            return current.data
        # Traverse the list checking the next node each time for the target and remove if it exists
        while (current != self.tail):
            # Look at the next item after current to see if it is the target
            if ( current.next.data == target ):
                result = current.next.data
                if ( current.next == self.tail ):
                    self.tail = current
                current.next = current.next.next
                self.length -= 1
                return result
            current = current.next
        return "Item not in Linked List"
    def print_list(self):
        if (self.length == 0):
            return "List is Empty"
        current = self.head
        while (current != None):
            print(current.data)
            current = current.next
        return True