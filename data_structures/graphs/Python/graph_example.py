g = Graph()

g.add_vertex("a", 3, 3)
g.add_vertex("b", 7, 8)
g.add_vertex("c", 12, 0)
g.add_vertex("d", 6, 5)
g.add_vertex("e", 2, 9)
g.add_vertex("f", 1, 6)
g.add_vertex("g", 9, 2)
g.add_vertex("h", 13, 9)
g.add_vertex("i", 4, 7)
g.add_vertex("j", 11, 2)

g.add_edge("a", "i")
g.add_edge("a", "f")
g.add_edge("a", "g")
g.add_edge("e", "b")
g.add_edge("i", "e")
g.add_edge("g", "j")
g.add_edge("b", "d")
g.add_edge("b", "j")
g.add_edge("j", "c")
g.add_edge("j", "h")
g.add_edge("c", "h")
