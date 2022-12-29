// Rotate Linked list
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

function rotateSLL(k) {
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = head;
  current = head;

  while (--k) {
    current = current.next;
  }

  head = current.next;
  current.next = null;
}

createSLL([1, 2, 3, 4, 5]);
traverseSLL(); // 1 2 3 4 5
rotateSLL(2);
traverseSLL(); // 3 4 5 1 2
