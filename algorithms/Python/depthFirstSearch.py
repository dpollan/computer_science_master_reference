#  Basic Depth First Search Algorithm added as method for Tree

def depth_first_search(self, target, node=None):
    self.found = False
    if node:
        current = node
    else:
        current = self.root
    print(f"Checking {current.name}")
    if (current.data == target):
        print(f"Value {target} found at {current.name}")
        self.found = True
        return True
    for child_node in current.children:
        if self.found == True:
            del self.found
            break
        self.depth_first_search(target, child_node)

Tree.depth_first_search = depth_first_search
