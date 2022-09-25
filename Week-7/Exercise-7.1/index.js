// REVERSE A LINKED LIST

class SLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head;

function createSLL(arr) {
  if (arr.length === 0) return;
  head = new SLLNode(arr[0]);

  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new SLLNode(arr[i]);
    current = current.next;
  }
}

function traverseSLL() {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function reverseSLL() {
  let prev = null,
    curr = head,
    after = null;

  while (curr.next) {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
  }
  curr.next = prev;
  head = curr;
}

createSLL([1, 2, 3, 4, 5]);
traverseSLL(head); // 1 2 3 4 5
reverseSLL(head);
traverseSLL(head); // 5 4 3 2 1
