var SinglyLinkedList = require('./singly');

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

function mergeSortLinkedList(sll) {
	//code here
	if(sll.nodeCount()<2) {
		return sll;
	}//ends if
	var left = new SinglyLinkedList();
	var right = new SinglyLinkedList();

	//we need to keep track of 3 lists
	var currentLeftNode = left.head;
	var currentRightNode = right.head;
	var currentListNode = sll.head;

	//how loop through
	for(var i=0; i<sll.nodeCount(); i++) {
		//if less than the half 
		if(i < ( sll.nodeCount() )/2){
			//push to the left
			left.insert(currentListNode.next.element, currentLeftNode);
			currentLeftNode = currentLeftNode.next;
		} else  {
			//push to the right
			right.insert(currentListNode.next.element, currentRightNode);
			currentRightNode = currentLeftNode.next;
		}//ends else
		//update the current list node
		currentListNode = currentListNode.next;
	}//ends for
	//what do we need to return? data for next method = mergeLinkedLists
	return mergeLinkedLists( mergeSortLinkedList(left), mergeSortLinkedList(right) );
}//ends method

function mergeLinkedLists(left, right) {
	//code here
	//there will be 3 cases: left, right, list
	var output = new SinglyLinkedList(left, right) {
		var output = new SinglyLinkedList();
		var currentOutput = output.head;
	}
	//case1 both data on the left and right
	while(left.nodeCount() > 0 && right.nodeCount() > 0) {
		//do something
		if(left.head.next.element <= right.head.next.element) {
			output.insert(left.head.next.element, currentOutput.element)
			left.remove(left.head.next.element);
			currentOutput = currentOutput.next;
		} else {
			output.insert(right.head.next.element, currentOutput.element);
			right.remove(right.head.next.element);
			currentOutput = currentOutput.next;
		}
	}
	//case2 data is only on the left
	while(left.nodeCount() > 0) {
		//do something
		//test this
		
	}
	//case3 data is only on the right
	while(right.nodeCount() < 0 ) {
		//do something
	}
	//what do we need to return? the output
	return output;
}

var answer = mergeSortLinkedList(sll);
answer.display();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

//https://github.com/andyrewlee/singlylinkedlist