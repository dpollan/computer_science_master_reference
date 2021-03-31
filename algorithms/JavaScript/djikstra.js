// Basic implementation of Djikstra's Pathfinding Algorithm

Graph.prototype.djikstra = function (startLocation, target) {
  var distanceMap = {};
  var backtrace = {};
  var pq = new PriorityQueue();

  // Populate the distanceMap and initialize all vertecies to infinity
  for (vertex in this.verts) {
    distanceMap[vertex] = Infinity;
  }
  // Set the startLocation vertex value to 0 in the distance map
  distanceMap[startLocation] = 0;

  // Put the start location into the Priority queue with it's cost as the priority
  pq.enqueue(startLocation, distanceMap[startLocation]);

  while (pq.size()) {
    let closestAjacentVertex = pq.dequeue();
    let current = closestAjacentVertex;

    this.verts[current].edges.forEach((edge) => {
      let name = edge[1];
      let distance = edge[2];
      let totalDistance = distanceMap[current] + distance;
      if (totalDistance < distanceMap[name]) {
        distanceMap[name] = totalDistance;
        backtrace[name] = current;
        pq.enqueue(name, distance);
      }
    });
  }
  let path = [target];
  let parentVertex = target;

  while (parentVertex !== startLocation) {
    path.unshift(backtrace[parentVertex]);
    parentVertex = path[0];
  }
  let distance = distanceMap[target].toFixed(2);
  return `Shortest path ${path.join(" -> ")} in ${distance} units`;
};
