// 수학적인 연산을 도와주는 메서드
// 최대값 Math.max() 절대값 Math.abs()

console.log(Math.max(-1, 1,13,56));
console.log(Math.min(-1, 1,-5, -54));

let num = [1, -1, 5, 15, -9];

console.log(Math.max.apply(null,num)); 
console.log(Math.max(...num));

// random 값 0~1 사이의 값을 랜덤하게 반환
console.log(Math.random()); 
for(let i=0; i<10; i++){
    console.log(Number.parseInt(Math.random()*10)); 

}
