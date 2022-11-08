// DETECT A LOOP IN SLL
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

function createALoopInSLL(k) {
  let current = head;
  let pivot;

  while (current.next) {
    current = current.next;
    k--;
    if (k == 0) {
      pivot = current;
    }
  }

  current.next = pivot;
}

function isLoopExistInSLL() {
  let sp = (fp = head);

  do {
    fp = fp.next;
    if (fp) fp = fp.next;

    sp = sp.next;
  } while (fp && sp != fp);

  if (fp == null) return console.log(false);

  return console.log(true);
}

createSLL([1, 2, 3, 4, 5]);
traverseSLL(); // 1 2 3 4 5
isLoopExistInSLL(); // false
createALoopInSLL(2);
isLoopExistInSLL(); // true
// traverseSLL() // 1 2 3 4 5 3 4 5 3 4 5 .....♾️
