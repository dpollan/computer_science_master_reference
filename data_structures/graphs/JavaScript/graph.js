// Basic Ajacency List Graph Implementation in JavaScript

class Vertex {
  constructor(name, xpos, ypos) {
    this.name = name;
    this.xpos = xpos;
    this.ypos = ypos;
    this.edges = [];
  }
  calculateDistance(target) {
    let pythagorian =
      (target.xpos - this.xpos) ** 2 + (target.ypos - this.ypos) ** 2;
    return Math.sqrt(pythagorian);
  }
  addEdge(target) {
    let distance = this.calculateDistance(target);
    this.edges.push([this.name, target.name, distance]);
    console.log(
      `Edge ${this.name} to ${
        target.name
      } added with distance of ${this.calculateDistance(target)}`
    );
  }
}

class Graph {
  constructor(verts) {
    this.verts = {};
  }
  addVertex(name, xpos, ypos) {
    let vertex = new Vertex(name, xpos, ypos);
    this.verts[vertex.name] = vertex;
    return true;
  }
  addEdge(source, destination) {
    this.verts[source].addEdge(this.verts[destination]);
    this.verts[destination].addEdge(this.verts[source]);
    return true;
  }
  printGraph() {
    for (let vertex in this.verts) {
      console.log(`Vertex: ${this.verts[vertex].name}`);
      this.verts[vertex].edges.forEach((edge) => {
        console.log(`        connects to : ${edge[1]}    Distance: ${edge[2]}`);
      });
    }
    return true;
  }
}
