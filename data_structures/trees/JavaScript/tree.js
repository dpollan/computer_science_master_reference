// Basic Tree data structure implemented using JS

class Node {
  constructor(data, name) {
    this.name = name ? name : "generic tree node"; // <-- Name is an optional parameter that can be passed.  It is unnecessary for data structure but helpful for debugging
    this.data = data;
    this.children = [];
  }
  addChild(entry, name) {
    let child = new Node(entry, name);
    this.children.push(child);
    return child;
  }
}

class Tree {
  constructor(data, name) {
    this.root = new Node(data, name);
  }
  printNode(node) {
    console.log(`${node.name}: ${node.data}`);
    console.log(`Children of ${node.name}:`);
    node.children.forEach((childNode) => {
      console.log(`${childNode.name}: ${childNode.data}`);
    });
    console.log("");
    node.children.forEach((childNode) => {
      this.printNode(childNode);
    });
  }
  printTree() {
    this.printNode(this.root);
  }
  // Depth First Search and Breadth First Search Methods are added in the Algorithms folder
}
