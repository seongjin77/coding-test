let fruits = ['apple','orange', 'melon'];
let ret;

ret = fruits.push('watermelon'); // 맨뒤 추가

ret = fruits.pop(); // 맨뒤 삭제

console.log(fruits);
console.log(ret);

let animals = ['rabbit', 'puppy', 'fox'];

ani = animals.splice(1,1); // 문자열 쪼개는 split랑 헷갈리지 않게 조심
                        // splice는 인덱스 1번부터 1개 삭제
                        // 원본 배열 손상 x 새로운 배열 만들어서 리턴하는것.
                        // splice(1, 1, 'kiwi') 새로운 데이터를 넣을 수 잇음

console.log(animals);

let hobby = ['piano', 'guitar', 'violin'];

for(let i=0; i<hobby.length; i++) { // for length로 배열 접근
    console.log(hobby[i]);
};

// for.. key in object 접근
// console.log(hobby[key]);
// for item of hobby 접근