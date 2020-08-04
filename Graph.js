
class Graph {
    constructor(name='') {
        this.name = name;
        this.nodes = {};
        this.edges = {};
    }
}

class GraphNode {
    constructor(val) {
        this.val = val;
    }
}

class GraphEdge {
    constructor(start, end, val=0) {
        this.id = start.concat(end);
        this.start = start;
        this.end = end;
        this.weight = val;
    }
}

Graph.prototype.addNode = node => {
    if( !this.nodes[node.val] ) {
        this.nodes[node.val] = node;
    }
}

Graph.prototype.addEdge = edge => {
    if(this.edges[edge.id]) {
        this.edges[edge.id].weight += 1;
    }
    else {
        this.edges[edge.id] = edge;
    }
}

Graph.getNode = val => {
    return this.nodes[val];
}