// Basic Breadth First Search Algorithm added as method for Tree

Tree.prototype.complete = false;

Tree.prototype.breadthFirstSearch = function (target) {
  var q = new Queue();
  q.enqueue(this.root);
  this.found = false;
  while (q.size()) {
    current = q.dequeue();
    console.log(`Checking ${current.name}`);
    if (current.data === target) {
      console.log(`Value ${target} found at ${current.name}`);
      this.found = true;
      break;
    }
    current.children.forEach((childNode) => {
      q.enqueue(childNode);
    });
  }
  if (this.found) {
    delete this.found;
    return true;
  }
  delete this.found;
  console.log(`${target} was not found in the Tree`);
  return false;
};
