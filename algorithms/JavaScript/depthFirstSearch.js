// Basic Depth First Search Algorithm added as method for Tree

Tree.prototype.complete = false;

Tree.prototype.depthFirstSearch = function (target, node) {
  this.found = false;
  let current = node ? node : this.root;
  console.log(`Checking ${current.name}`); // <--- prints the node we are currently looking at, order for treeExample.js for DFS should be A-B-D-E-F-C-G-I-J-K-L-H searching for 70
  if (current.data === target) {
    console.log(`Value ${target} found at ${current.name}`);
    this.found = true;
    return true;
  }
  for (let i = 0; i < current.children.length; i++) {
    if (this.found) {
      delete this.found;
      break;
    }
    this.depthFirstSearch(target, current.children[i]);
  }
};
