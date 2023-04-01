
/*1. A "Node" class that encapsulates a node of the linked list.
2. A "LinkedList" class that implements the linked list data structure.
3. Supports adding a node at the beginning of the linked list.
4. Supports adding a node at the end of the linked list.
5. Supports adding a node at a specific position of the linked list.
6. Supports removing a node from the beginning of the linked list.
7. Supports removing a node from the end of the linked list.
8. Supports removing a node from a specific position of the linked list.
9. Supports searching for a node in the linked list.
10. Supports updating a node at a specific position of the linked list.
11. Supports concatenating two linked lists.
12. Supports reversing the linked list.
13. Find the mid value of a linked list.
14. Delete a given node of the linked list.
15. Detect cycle in a linked list.*/

// TODO: START ASSIGNMENT

//1. A "Node" class that encapsulates a node of the linked list.
class Node {
  constructor(value, next = null, pre = null) {
    this.value = value;
    this.pre = pre;
    this.next = next;
  }
}

//2. A "LinkedList" class that implements the linked list data structure.
class AssignmentOfLinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = this.tail = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length = 1;
  }
  //3. Supports adding a node at the beginning of the linked list.
  preInsertNode(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length++;
  }
  // 4. Supports adding a node at the end of the linked list.
  postInsertNode(value) {
    let node = new Node(value);
    node.pre = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
    this.head.pre = this.tail;
    this.length++;
  }
  //5. Supports adding a node at a specific position of the linked list.
  insertAnyPosition(position, value) {
    let node = new Node(value);
    if (position === 1) {
      this.preInsertNode(value);
    } else if (position === this.length + 1) {
      this.postInsertNode(value);
    } else {
      let place = this.findNodePosition(position - 1);
      let placeNext = place.next;
      place.next = node;
      node.pre = place;
      node.next = placeNext;
      placeNext.pre = node;
      this.length++;
    }
  }
  // Find node position 
  findNodePosition(position) {
    let data = this.head;
    let count = 1;

    while (data) {
      if (count === position) break;
      count++; 
      data = data.next;
    }
    return data;
  }
  //6. Supports removing a node from the beginning of the linked list.
  deleteFirstNode() {
    let head = this.head.next;
    this.head = head;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length--;
  }
  //7. Supports removing a node from the end of the linked list.
  deleteLastNode() {
    let data = this.head;
    let tail, length = 1;
    
    while (length <= this.length) {
      if (data.next === this.tail) {
        tail = data;
      }
      length++;
      data = data.next;
    }

    this.tail = tail;
    this.tail.next = this.head;
    this.head.pre = this.tail;
    this.length--;
  }
  //8. Supports removing a node from a specific position of the linked list.
  deleteAnyPosition(position) {
    if (position === 1) {
      this.deleteFirstNode();
    } else if (position === this.length) {
      this.deleteLastNode();
    } else {
      let prePosition = this.findNodePosition(position - 1);
      let postPosition = this.findNodePosition(position + 1);
      prePosition.next = postPosition;
      postPosition.pre = prePosition;
      this.length--;
    }
  }
  //9. Supports searching for a node in the linked list.
  searchingNode(value) {
    let data = this.head;
    let length = 1;
    while (length <= this.length) {
      if (data.value === value) {
        console.log(data.value, length)
        return data.value, length;
      }
      length++;
      data = data.next;
    }
    console.log(`Data is not found`);
    return `Data is not found`;
  }
  //10. Supports updating a node at a specific position of the linked list.
  updatingNode(position, value) {
    let place = this.findNodePosition(position);
    place.value = value;
  }
  //11. Supports concatenating two linked lists.
  concatenatingTwoLinkedList() {
    
  }
  //12. Supports reversing the linked list.
  ascendingNode() {
    let data = this.head;
    let length = 1, arr = [];
    while (length <= this.length) {
      console.log(data.value);
      arr.push(data.value)
      data = data.next;
      this.length--;
    }
    console.log(arr)
    return arr;
  }
  descendingNode() {
    let data = this.tail;
    let length = 1, arr = [];
    while (length <= this.length) {
      console.log(data.value)
      arr.push(data.value);
      data = data.pre;
      this.length--;
    }
    console.log(arr);
    return arr;
  }
  // 13. Find the mid value of a linked list. TODO: It's use for single link list.
  /*findMidNodeWithOutIndex() {
    let slow = this.head;
    let fast = this.head;
    let count = 1;
    while (fast.next) {
      count++;
      slow = slow.next;
      fast = fast.next;
      if (fast.next) fast = fast.next;
    }
    console.log(slow.value, count);
    return slow.value, count;
  }*/
  
  //15. Detect cycle in a linked list.
  circleNode() {
    let slow = this.head;
    let fast = this.head;
    while (this.head) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        console.log(slow.value, fast.value)
        return true;
      }
    }
    return false;
  }
}




const list = new AssignmentOfLinkedList(30);
list.preInsertNode(20)
// list.preInsertNode(2)
list.postInsertNode(40)
list.insertAnyPosition(1, 10)
list.insertAnyPosition(5, 50)
list.insertAnyPosition(6, 60)
// list.deleteFirstNode()
// list.deleteLastNode();
// list.deleteAnyPosition(1);
// list.searchingNode(100);
// list.updatingNode(4,2000)
// list.ascendingNode()
// list.descendingNode()

list.circleNode()
console.log(list)





