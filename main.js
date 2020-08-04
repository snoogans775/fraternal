class Graph {
    constructor(name='') {
        this.name = name;
        this.nodes = {};
        this.edges = {};
    }

    addNode = node => {
        if( !this.nodes[node.val] ) {
            this.nodes[node.val] = node;
        }
    }

    addEdge = edge => {
        if(this.edges[edge.id]) {
            this.edges[edge.id].weight += 1;
        }
        else {
            this.edges[edge.id] = edge;
        }
    }
    
    getNode = val => {
        return this.nodes[val];
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

var express = require('express');

const app = express();
app.listen('3000', () => console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

//Input string
var str = 'For I pooped my butt I knew that all was not lost, yay. The excrement which sprung forth from my poopy, poopy, but was that which one calls "The Chonus". I have reached the bonezone yay, but thereupon I twisted several sick beats up like followers be liking those jams. Many jams burst forth from my sweet, sweet poopy anus.';

//Word breaks
var arr = str.split(' ');

//Create empty graph
const wordGraph = new Graph('wordGraph');

//Populate nodes
let nodes = arr.map( word => new GraphNode(String(word)));
nodes.map( node => wordGraph.addNode(node));


//Get a node

//Print graph
console.log( wordGraph );