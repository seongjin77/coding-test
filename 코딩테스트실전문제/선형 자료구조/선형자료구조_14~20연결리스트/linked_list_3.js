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
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};

// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) { // 매개변수 기본값 설정 할 수 있음 0으로
  if (position < 0 || position > this.length) {   // 위치에 문제가 있으면 리턴 false가 반환
    return false;
  }

  let node = new Node(value),     
    current = this.head,      // node의 앞 위치를 찾는데 쓰임 현재는 null.
    index = 0,      // 내가 몇 번째 위치에 있는지 저장할 변수
    prev;     // 이전 node값을 저장할 변수

  if (position === 0) {
    node.next = current;   // 현재 head 부분이 노드 다음을 가르키고 지금의 헤드는 노드가 대신한다. 
    this.head = node;
  } else {
    while (index++ < position) {    // 인덱스를 증가시키면서 포지션 값만큼 
      prev = current;
      
      current = current.next;
      
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;
};

// remove(): value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
// ll.printNode();

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();
// console.log(ll.size());


//처음에 head -> null이라는 객체르 만듦
// 그다음 노드의 null값이 this.head의 null값을 가르키게 변함
// 그 다음 10데이터 노드는 head가 되고 노드.next는 이전의 head를 가르킴