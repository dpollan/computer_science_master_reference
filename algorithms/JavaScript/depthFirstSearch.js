// Basic Depth First Search Algorithm added as method for Tree

Tree.prototype.complete = false;

Tree.prototype.depthFirstSearch = function (target) {
  var s = new Stack();
  s.push(this.root);
  this.found = false;
  while (s.size()) {
    let current = s.pop();
    console.log(`Checking ${current.name}`);
    if (current.data === target) {
      console.log(`Value ${target} found at ${current.name}`);
      this.found = true;
      break;
    }
    for (
      let childNode = current.children.length - 1;
      childNode >= 0;
      --childNode
    ) {
      if (!current.children.length) {
        break;
      }
      s.push(current.children[childNode]);
    }
  }
  if (this.found) {
    delete this.found;
    return true;
  }
  console.log(`${target} was not found in the Tree`);
  return false;
};

// Basic Depth First Search Algorithm added as method for Graph

Graph.prototype.depthFirstSearch = function (startLocation, target) {
  var s = new Stack();
  var history = {};
  history[startLocation] = true;
  s.push(this.verts[startLocation]);
  while (s.size()) {
    let current = s.pop();
    history[current.name] = true;
    console.log(`Checking ${current.name}`);
    if (current.name === target) {
      console.log(`Target ${target} found at ${current.xpos}, ${current.ypos}`);
      this.found = true;
      break;
    }
    current.edges.forEach((edge) => {
      let ajacentVertex = edge[1];
      if (history[ajacentVertex]) {
        null;
      } else {
        s.push(this.verts[ajacentVertex]);
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
