function solution(arr){
 let answer = [];

 const eratosthenes = (n) => {
    const arr = Array(n+1).fill(true)
    arr[0] = false
    arr[1] = false
    for (let i = 2; i ** 2 < n+1; ++i) {
        if (!arr[i]) continue 
        for (let j = 2 * i; j < n+1; j += i) arr[j] = false
    }
    return arr[n];
} 

for(let x of arr){
    let res=Number(x.toString().split('').reverse().join(''));
    if(eratosthenes(res)){
        answer.push(res)
    }
}

 console.log(answer);
};

let num = [32,55,62,20,250,370,200,30,100]
solution(num);