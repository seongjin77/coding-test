// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// append(): 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    현재노드 = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (현재노드.next != null) {
      현재노드 = 현재노드.next;
    }
    현재노드.next = node;
  }

  this.length++;
};

let 리스트 = new LinkedList();

console.log('내가찾 :'+리스트);

리스트.append(1);
리스트.printNode()
리스트.append(10);
리스트.printNode()
리스트.append(100);

리스트.printNode();
console.log(리스트.size());
