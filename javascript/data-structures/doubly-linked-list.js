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

  push (val) {
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
  pop () {
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
  shift () {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }
  unshift (val) {
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    return this;
  }
  get (index) {
    if (index < 0 || index >= this.length || index === undefined) {
      return null;
    }
    let count;
    let current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count += 1;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count -= 1;
      }
    }
    return current;
  }
  set (index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert (index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (this.length === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    let targetNode = this.get(index - 1);
    let newNode = new Node(value);
    newNode.prev = targetNode;
    newNode.next = targetNode.next;
    newNode.next.prev = newNode;
    targetNode.next = newNode;
    this.length += 1;
    return true;
  }
  remove (index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    let afterNode = foundNode.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    foundNode.prev = null;
    foundNode.next = null;
    this.length -= 1;
    return foundNode;
  }
}
