// Basic Breadth First Search Algorithm added as method for Tree

Tree.prototype.complete = false;

Tree.prototype.breadthFirstSearch = function (target, node) {
  this.complete = false;
  let current = node ? node : this.root;
  console.log(`Checking ${current.name}`); // <--- prints the node we are currently looking at, order for treeExample.js for BFS should be A-B-C-D-E-F-G-H searching for value 70
  if (current.data === target) {
    console.log(`Value ${target} found at ${current.name}`);
    this.complete = true;
    return true;
  }
  for (let i = 0; i < current.children.length; i++) {
    if (this.complete) {
      break;
    }
    console.log(`Checking ${current.children[i].name}`);
    if (current.children[i].data === target) {
      console.log(`Value ${target} found at ${current.children[i].name}`);
      this.complete = true;
    }
  }
  for (let j = 0; j < current.children.length; j++) {
    if (this.complete) {
      break;
    }
    this.breadthFirstSearch(target, current.children[j]);
  }
};
