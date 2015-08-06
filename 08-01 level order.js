//level over https://www.youtube.com/watch?v=ySzWKeRQDxY

function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}//ends function

Node.prototype.show = function() {
	return this.data;
};//ends method

function BST() {
	this.root = null;
}//ends function

BST.prototype.insert = function(data) {
	this.root = this.insertNode(this.root, data);
};//ends method

BST.prototype.insertNode = function(node, data) {
	if (node === null) {
		return new Node(data, null, null);
	} //ends if
	else {
		if (data < node.data) {
			node.left = this.insertNode(node.left, data);
		}//ends if
		else {
			node.right = this.insertNode(node.right, data);
		}//ends else
		return node;
	}// else
};//end method

BST.prototype.levelOrder = function() {
	//you code here

	if(this.root === null) {
		return null;
	} else {
		var queue = [ this.root ];
		while (queue.length > 0 ) {
			current = queue [0];
			console.log(current.data + "");
			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push (current.right);
			}
			queue.shift();
		}
	}
};

var BST = new BST();
BST.insert(23);
BST.insert(16);
BST.insert(37);
BST.insert(3);
BST.insert(99);
BST.insert(22);
BST.insert(38);
BST.insert(2);

BST.levelOrder(); 