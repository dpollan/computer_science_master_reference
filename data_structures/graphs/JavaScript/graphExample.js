g = new Graph();

g.addVertex("a", 3, 3);
g.addVertex("b", 7, 8);
g.addVertex("c", 12, 1);
g.addVertex("d", 6, 5);
g.addVertex("e", 2, 9);
g.addVertex("f", 1, 6);
g.addVertex("g", 9, 2);
g.addVertex("h", 13, 9);
g.addVertex("i", 4, 7);
g.addVertex("j", 11, 2);

g.addEdge("a", "i");
g.addEdge("a", "f");
g.addEdge("a", "g");
g.addEdge("e", "b");
g.addEdge("i", "e");
g.addEdge("g", "j");
g.addEdge("b", "d");
g.addEdge("b", "j");
g.addEdge("j", "c");
g.addEdge("j", "h");
g.addEdge("c", "h");
