'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, before) {
    if(this.head.value === before) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while((currNode.next !== null) && (currNode.value !== before)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      throw new Error('Item to insert before not found');
    }
    previousNode.next = new _Node(item, currNode);
  }
  
  insertAfter(item, after) {
    let currNode = this.head;

    while((currNode !== null) && (currNode.value !== after)) {
      currNode = currNode.next;
    }
    if(currNode === null) {
      throw new Error('Item to insert after not found');
    }
    if(currNode !== null) {
      currNode.next = new _Node(item, currNode.next);
    }
  }

  insertAt(item, position) {
    if(position === 0) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    let count = 0;

    while((currNode !== null) && (count !== position)) {
      previousNode = currNode;
      currNode = currNode.next;
      count++
    }
    if(currNode === null) {
      throw new Error('Cannot insert at position');
    }
    previousNode.next = new _Node(item, currNode);
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if(!this.head) {
      return null;
    }
    //check for the item
    while(currNode.value !== item) {
      //return null if end of the list and the item is not on the list
      if(currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if(!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while((currNode !==null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}


//================================================================

function main() {
  let SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
//   SSL.insertBefore('Athena', 'Boomer');
//   SSL.insertAfter('Hotdog', 'Helo');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');
//   SSL.remove('squirrel');
//   SSL.insertBefore('Ray', 'Apollo');
//   SSL.insertAfter('Ray', 'Tauhida');
//   SSL.insertAt('Ray', 0);
  console.log(SSL.find('Helo'));
  console.log(SSL.find('Starbuck'));
//   console.log(SSL.find('Boomer'));
//   console.log(SSL);
}

main();