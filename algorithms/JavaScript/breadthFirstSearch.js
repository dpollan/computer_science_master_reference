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

Graph.prototype.breadthFirstSearch = function (startLocation, target) {
  var q = new Queue();
  var history = {};
  history[startLocation] = true;
  this.found = false;
  q.enqueue(this.verts[startLocation]);
  while (q.size()) {
    let current = q.dequeue();
    history[current.name] = true;
    console.log(`Checking ${current.name}`);
    if (current.name === target) {
      console.log(`${target} was found at ${current.xpos}, ${current.ypos}`);
      this.found = true;
      break;
    }
    current.edges.forEach((edge) => {
      let ajacentVertex = edge[1];
      if (history[ajacentVertex]) {
        null;
      } else {
        q.enqueue(this.verts[ajacentVertex]);
      }
    });
  }
  if (this.found) {
    delete this.found;
    return true;
  }
  console.log(
    `${target} was not found on the Graph or is unreachable from ${startLocation}`
  );
  return false;
};
