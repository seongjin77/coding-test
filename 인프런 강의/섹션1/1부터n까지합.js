function total(num){
    let answer = 0;
    for(let i =1; i<=num; i++){
        answer += i
    }
    return answer;
}

console.log(total(6));