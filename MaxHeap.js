class MaxHeap {
	this.items = [];

	constructor(){}

	pop(){
		if(this.items.length === 0) return;
		//remove the root element
		var val = this.items[0];

		//move this.item[size-1] to the root;
		this.items[0] = this.items[this.items.length-1];
		this.items.splice(this.items.length-1, 1);

		//move down the root value untill it hits the right place
		_heapifyDown();
		return val;
	}

	peek(){
		return this.items[0];
	}

	insert(item){
		//push the item
		this.add(item);
		
		_heapifyUp();
	}

	getSize(){
		return this.items.length;
	}

	//internal methods (ES6 doesn't have "private")
	_hasLeftChild(i){ return (_leftChild(i) !== undefined); }
	_hasRightChild(i){ return (_rightChild(i) !== undefined); }
	_hasParent(i){ return (i !== 0); }

	_root(i){ return this.items[i]; }
	_leftChild(i){ return this.items[_leftChildIndex(i)]; }
	_rightChild(i){ return this.items[_rightChildIndex(i)]; }
	_parent(i){ return this.items[_parentIndex(i)]; }

	_leftChildIndex(i){ return 2 * i + 1; }
	_rightChildIndex(i){ return 2 * i + 2; }
	_parentIndex(i) { return Math.ceil((i - 2) / 2); }

	_swap(i, j){
		var temp = this.items[i];
		this.items[i] = this.items[j];
		this.items[j] = temp;
	}

	_hasBiggerLeftChild(i){
		return (_hasLeftChild(i) && (_root(i) < _leftChild(i));
	}

	_hasBiggerRightChild(i){
		return (_hasRightChild(i) && (_root(i) < _rightChild(i));
	}

	_hasBiggerParent(i){
		return (_hasParent(i) && (_root(i) < _parent(i));
	}

	//check if the item is in the right place		
	//if true or the item is at the top, stop it,
	//if false, bubble it up to its parent
	_heapifyUp(){
		var i = this.items.length-1;

		//end if its parent isn't bigger than the root OR it has no parent
		while(!_hasBiggerParent(i)){
			swap(i, _parentIndex(i));
		}
	}

	//check the root.
	//if it's not the biggest value, move it down to the right position.	
	_heapifyDown(){
		var i = 0;
		//end if it has no child which is bigger than the root
		while(_hasBiggerLeftChild(i) || _hasBiggerRightChild(i)) {			
			if(!_hasRightChild(i)){
				//if it doesn't have its right child, _hasBiggerLeftChild(i) must be true.
				//Swap the root with its left child.
				var leftChildIndex = _leftChildIndex(i)
				swap(i, leftChildIndex);
				i = leftChildIndex;
			}else{
				//If it has both children, choose the bigger one
				var L = _leftChild(i);
				var R = _rightChild(i);
				var biggerChildIndex = (L > R) ? _leftChildIndex(i) : _rightChildIndex(i);
				//Swap it with the bigger one.
				swap(i, biggerChildIndex);
				i = biggerChildIndex;
			}
		}
	}
}