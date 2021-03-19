# Basic Breadth First Search Algorithm added as method for Tree

def breadth_first_search(self, target):
    q = Queue()
    q.enqueue(self.root)
    self.found = False
    while q.size() != 0:
        current = q.dequeue()
        print(f"Checking {current.name}")
        if current.data == target:
            print(f"Value {target} found at {current.name}")
            self.found = True
            break
        for child_node in current.children:
            q.enqueue(child_node)
    if self.found:
        q.data = []
        return True
    print(f"{target} was not found in the Tree")
    return False

Tree.breadth_first_search = breadth_first_search