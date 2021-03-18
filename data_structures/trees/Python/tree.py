# Basic Tree data structure implemented using Python

class Node:
    def __init__(self, data, name):
        self.data = data
        self.name = name
        self.children = []
    def add_child(self, entry, name):
        child = Node(entry, name)
        self.children.append(child)
        return child

class Tree:
    def __init__(self, data, name):
        self.root = Node(data, name)
    def print_node(self, node):
        print(f"{node.name}: {node.data}")
        print(f"Children of {node.name}:")
        for child_node in node.children:
            print(f"{child_node.name}: {child_node.data}")
        print("")
        for child_node in node.children:
            self.print_node(child_node)
    def print_tree(self):
        self.print_node(self.root)