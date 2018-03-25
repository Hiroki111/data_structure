class MinHeap{
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
	_hasLeftChild(i){ return (_getLeftChild(i) !== undefined); }
	_hasRightChild(i){ return (_getRightChild(i) !== undefined); }
	_hasParent(i){ return (i !== 0); }

	_getRoot(i){ return this.items[i]; }
	_getLeftChild(i){ return this.items[_getLeftChildIndex(i)]; }
	_getRightChild(i){ return this.items[_getRightChildIndex(i)]; }
	_getParent(i){ return this.items[_getParentIndex(i)]; }

	_getLeftChildIndex(i){ return 2 * i + 1; }
	_getRightChildIndex(i){ return 2 * i + 2; }
	_getParentIndex(i) { return Math.ceil((i - 2) / 2); }

	_swap(i, j){
		var temp = this.items[i];
		this.items[i] = this.items[j];
		this.items[j] = temp;
	}

	_hasSmallerLeftChild(i){
		return (_hasLeftChild(i) && (_getRoot(i) > _getLeftChild(i));
	}

	_hasSmallerRightChild(i){
		return (_hasRightChild(i) && (_getRoot(i) > _getRightChild(i));
	}

	_hasSmallerParent(i){
		return (_hasParent(i) && (_getRoot(i) > _getParent(i));
	}

	_heapifyUp(){
		var i = this.items.length-1;

		//end if its parent isn't smaller than the root OR it has no parent
		while(!_hasSmallerParent(i)){
			swap(i, _getParentIndex(i));
			i = _getParentIndex(i);
		}
	}

	//check the root.
	//if it's not the smallest value, move it down to the right position.	
	_heapifyDown(){
		var i = 0;
		//end if it has no child which is smaller than the root
		while(_hasSmallerLeftChild(i) || _hasSmallerRightChild(i)) {			
			if(!_hasRightChild(i)){
				//if it doesn't have its right child, _hasSmallerLeftChild(i) must be true.
				//Swap the root with its left child.
				var leftChildIndex = _getLeftChildIndex(i)
				swap(i, leftChildIndex);
				i = leftChildIndex;
			}else{
				//If it has both children, choose the smaller one
				var L = _getLeftChild(i);
				var R = _getRightChild(i);
				var smallerChildIndex = (L > R) ? _getLeftChildIndex(i) : _getRightChildIndex(i);
				//Swap it with the smaller one.
				swap(i, smallerChildIndex);
				i = smallerChildIndex;
			}
		}
	}
}