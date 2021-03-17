# Basic Ajacency List Graph Implementation in Python

import math

class Vertex:
    def __init__(self, name, xpos, ypos):
        self.name = name
        self.xpos = xpos
        self.ypos = ypos
        self.edges = []
    def calculate_distance(self, target):
        pythagorian = ( (target.xpos - self.xpos) ** 2 ) + ( (target.ypos - self.ypos) ** 2 )
        return math.sqrt(pythagorian)
    def add_edge(self, target):
        distance = self.calculate_distance(target)
        self.edges.append([self.name, target.name, distance])
        print(f"Edge {self.name} to {target.name} added with a distance of {distance}")
        return  True

class Graph:
    def __init__(self):
        self.verts = {}
    def add_vertex(self, name, xpos, ypos):
        vertex = Vertex(name, xpos, ypos)
        self.verts[name] = vertex
        return True
    def add_edge(self, source, destination):
        self.verts[source].add_edge(self.verts[destination])
        self.verts[destination].add_edge(self.verts[source])
        return True
    def print_graph(self):
        for vertex in self.verts:
            print(f"Vertex: {self.verts[vertex].name}")
            for edge in self.verts[vertex].edges:
                print(f"        connects to : {edge[1]}    Distance: {edge[2]}")
        return True
