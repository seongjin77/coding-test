function solution (left, right){
    let sum = [...left, ...right];
    sum.sort((a,b)=>a-b);

    return sum
}

let left = [1,3,5];
let right =[2,3,6,7,9];

console.log(solution(left, right));