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


function display(list) {
  let currNode = list.head;
  let displayList = currNode.value.toString();
  while(currNode.next !== null) {
    displayList += ', ' + currNode.next.value.toString();
    currNode = currNode.next;
  }
  if(currNode === null) {
    throw new Error('List is empty');
  }
  return displayList;
}


function size(list) {
  let currNode = list.head;

  if(currNode === null) {
    throw new Error('List is empty');
  }
  let size = 0;
  while(currNode !== null) {
    currNode = currNode.next;
    size++;
  }
  return size;
}


function isEmpty(list) {
  if(list.head === null) {
    return 'Empty list';
  } else {
      return 'List not empty';
  }
}


function findPrevious(list, before) {
  if(list.head.value === before) {
    throw new Error(`Nothing before ${before}`);
  }
  let currNode = list.head;
  while((currNode.next !== null) && (currNode.next.value !== before)) {
    currNode = currNode.next;
  }
  return currNode;
}


function findLast(list) {
  if(list.head === null) {
    throw new Error('List is empty');
  }
  let currNode = list.head;
  while(currNode.next !== null) {
    currNode = currNode.next;
  }
  if(currNode.next === null) {
    return currNode;
  }
}


//================================================================
// *MYSTERY PROGRAM*
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// This function is looping through the input list twoce to check if there are any matching list items. If there is a matching list item, it will
// replace the value with the next value in the list.
// 0(n^2) Polynomial - This algorithm uses a nested loop


//================================================================
// *REVERSE LIST*
function reverseList(list) {
  if(!list.head) {
    return;
  }
  let currNode = list.head;
  let previousNode = null;
  let nextNode = null;

  while(currNode !== null) {
    nextNode = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = nextNode;
    // console.log(currNode, "equals");
  }
  list.head = previousNode;
  return list;
  console.log(list);
}

//================================================================
// *THIRD FROM THE END*
function thirdFromEnd(list) {
  if(!list.head) {
    return;
  }
  let currNode = list.head;

  while(currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  return currNode;
}

//================================================================
function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
//   SSL.insertBefore('Athena', 'Boomer');
//   SSL.insertAfter('Hotdog', 'Helo');
//   SSL.insertAt('Kat', 3);
//   SSL.remove('Tauhida');
//   SSL.remove('squirrel');
//   SSL.insertBefore('Ray', 'Apollo');
//   SSL.insertAfter('Ray', 'Tauhida');
//   SSL.insertAt('Ray', 0);
//   console.log(SSL.find('Helo'));
//   console.log(SSL.find('Starbuck'));
//   console.log(SSL.find('Boomer'));
//   console.log(SSL);
//   console.log(display(SLL));
//   console.log(size(SLL));
//   console.log(isEmpty(SLL));
//   console.log(findPrevious(SLL, 'Husker'));
//   console.log(findLast(SLL));
//   console.log(reverseList(SLL));
  console.log(thirdFromEnd(SLL));

}

main();

