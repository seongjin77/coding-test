function 홀수(a,b,c,d,e,f,g){
    let 홀수arr = [];
    let 순회 = [a,b,c,d,e,f,g];

    for(let a of 순회){
        if(a % 2 !== 0){
            홀수arr.push(a)
        }
    }

    let 최솟값 = Math.min(...홀수arr);
    let 합 = 홀수arr.reduce((a,b) => a+b ,0)

    return [최솟값,합]
}

console.log(홀수(12,77,38,41,53,92,85));