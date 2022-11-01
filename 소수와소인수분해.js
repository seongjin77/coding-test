function solution(n){
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);
    for(let i = 2 ; i * i <= n; i++){
        if(arr[i]){
            for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            }
        }
    }

    return arr;
}
///////////////////////
console.log(solution(30));

const eratosthenes = (n) => {
    const arr = Array(n+1).fill(true)
    arr[0] = false
    arr[1] = false
    for (let i = 2; i ** 2 < n+1; ++i) {
        if (!arr[i]) continue 
        for (let j = 2 * i; j < n+1; j += i) arr[j] = false
    }
    return arr
}

//// 소인수분해
function solution(n) {
    var answer = [];
    // 1. n을 2부터 나누어준다. 나눴을때 나머지가 0이면 같은 수로 또 나눠줌.
    // 2. 나머지가 0이 아니면 n을 1 증가시켜서 나눠줌
    let divide= 2;
    while(n !== 1){
        if(n % divide === 0 ){
            n = n / divide
            answer.push(divide)
            
        }
        else divide++
    }
    
    
    return answer;
}