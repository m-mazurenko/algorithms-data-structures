class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const res = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let newTail = res.prev;
      newTail.next = null;
      this.tail = newTail;
      res.prev = null;
    }
    this.length--;
    return res;
  }
}
