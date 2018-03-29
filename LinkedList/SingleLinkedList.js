class SingleLinkedList {
	this.head;
	this.next = null;

	constructor(){}

	constructor(val){
		this.head = new Node(val);
	}

	insert(val){
		if(!this.head){
			this.head = new Node(val);
			return;
		}

		var node = this.head;
		while(node){
			if(!node.next) node.next = new Node(val);			
		}
	}

	delete(){
		if(!this.head) throw new Error("This list is empty");

		this.head = this.head.next;
	}

	delete(val){
		var cur = this.head;
		var prev = new Node();
		while(cur){
			if(cur.val === val){
				prev.next = cur.next;
				return;
			}else{
				prev.next = cur;
				cur.next = cur.next.next;
			}
		}
		throw new Error(val + " not found");
	}

	display(){
		var node = this.head;
		while(node){
			console.log(node.val);
			node = node.next;
		}
	}

	search(val){
		var node = this.head;
		while(node){
			if(node.val === val){
				console.log(node.val);
				return;
			} else {
				node = node.next;
			}
		}
		throw new Error(val + " not found");
	}
}

class Node(){
	this.val;
	this.next = null;

	constructor(val){
		this.val = val;
	}
}