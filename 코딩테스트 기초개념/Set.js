// value만 저장하며 중복을 허용하지 않는 collection
// 요소추가 Set.add() / 요소 존재여부 Set.has() / 삭제 Set.delete()
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set('Hello!');

console.log(set);
console.log(num);
console.log(str); //  중복된 단어 삭제

set.add(1).add(1).add(10).add(20);
console.log(set);

console.log(set.has(10));
console.log(set.has(3));

for(let item of num){
    console.log(item);
}