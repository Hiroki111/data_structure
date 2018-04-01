class Graph {
	this.nodeLookup = {};

	constructor(){}

	addNode(x){

	}
		

	removeNode(x){}	
	
	addEdge(x, y){
		var source = getNode(x);
		var destination = getNode(y);

		if(!source || !destination) throw new Error("Invalid node ID");

		source.adjacent.push(destination);
	}

	removeEdge(x, y){}

	getNode(x){
		return this.nodeLookup[x.id];
	}

	setNode(x){}

	areAdjacent(x, y){}

	getNeibours(x){}

	hasPathDFS(x, y){
		var source = getNode(x);
		var destination = getNode(y);
		var visited = {};
		return hasPathDFSHelper(source, destination, visited);
	}

	hasPathDFSHelper(source, destination, visited){
		if(visited[source.id]){
			return false;
		}
		
		visited[source.id] = true;

		if(source.id === destination.id){
			return true;
		}

		source.adjacentNodes.forEach((adjacent) => {
			if(hasPathDFSHelper(adjacent, destination, visited)){
				return true;
			}
		});

		return false;
	}

	hasPathBFS(source, destination){}
}

class Node {
	this.id;
	this.adjacentNodes = [];

	constructor(id){
		this.id = id;
	}
}