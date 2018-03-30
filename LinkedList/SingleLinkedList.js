class SingleLinkedList {
	this.head;
	this.length = 0;
	this.next = null;

	constructor(){}

	constructor(val){
		if (!val) return false;

		this.head = new Node(val);
		this.length++;
	}

	insert(val){
		if (!val) return false;

		if(!this.head){
			this.head = new Node(val);
			this.length++;
			return;
		}

		var node = this.head;
		while(node){
			if(!node.next){
				node.next = new Node(val);			
				this.length++;
			}
		}
	}

	delete(){
		if(!this.head) return false;

		this.head = this.head.next;
		this.length--;
	}

	delete(val){
		if(!this.head) return false;

		var cur = this.head;
		var prev = new Node();
		while(cur){
			if(cur.val === val){
				prev.next = cur.next;
				this.length--;
				return;
			}
			prev.next = cur;
			cur.next = cur.next.next;
		}
		return false;
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
			} 
			node = node.next;
		}
		return false;
	}

	reverse(){
		var prev = null;
		var next = null;
		var cur = this.head;

		while(cur){
			next = cur.next;
			cur.next = prev;
			prev = cur;
			cur = next;
		}

		return prev;
	}
}

class Node(){
	this.val;
	this.next = null;

	constructor(val){
		this.val = val;
	}
}