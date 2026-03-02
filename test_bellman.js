import { BellmanFordAlgorithm } from './src/graphs/algorithms/shortest-path/BellmanFordAlgorithm.ts';
import { AdjacencyListGraph } from './src/graphs/structures/AdjacencyListGraph.ts';

const graph = new AdjacencyListGraph(true, true);
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1, 1);
graph.addEdge(1, 2, -1);
graph.addEdge(2, 3, -1);
graph.addEdge(3, 1, -1); // negative cycle 1 -> 2 -> 3 -> 1 (sum = -3)

const bf = new BellmanFordAlgorithm();
const gen = bf.findShortestPathGenerator(graph, 0, 3);

let result = gen.next();
while (!result.done) {
    console.log(result.value.type, result.value.message);
    result = gen.next();
}
console.log("Done");
