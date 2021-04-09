# Basic implementation of Djikstra's Pathfinding Algorithm

import math

def djikstra (self, start_location, target):
    distance_map = {}
    backtrace = {}
    pq = PriorityQueue()
    for vertex in self.verts:
        distance_map[vertex] = math.inf
    if not start_location in self.verts:
        raise ValueError('Starting position is not present on the graph')
    if not target in self.verts:
        raise ValueError('Target position is not present on the graph')
    distance_map[start_location] = 0
    pq.enqueue(start_location, distance_map[start_location])
    while pq.size():
        closest_adjacent_vertex = pq.dequeue()
        current = closest_adjacent_vertex
        for edge in self.verts[current].edges:
            name = edge[1]
            distance = edge[2]
            total_distance = distance_map[current] + distance
            if total_distance < distance_map[name]:
                distance_map[name] = total_distance
                backtrace[name] = current
                pq.enqueue(name, distance)
    path = []
    path.append(target)
    parent_vertex = target
    while parent_vertex != start_location:
        print(path)
        path.append(backtrace[parent_vertex])
        parent_vertex = path[ len(path) - 1]
    distance = distance_map[target]
    path.reverse()
    print(path)
    final_path = ""
    for vertex in path:
        final_path += vertex + " -> "
    final_path = final_path[:len(final_path) - 3]
    return f"Shortest path {final_path} in {distance} units"

Graph.djikstra = djikstra