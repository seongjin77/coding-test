function solution (str){
    let answer = [];
    let count =1;

    for(let i=0; i<str.length; i++){
        // s = str[i]
        if(str[i] === str[i+1] && str[i+1] !== undefined){
            count++
        }
        else {
            answer.push(str[i]);
            if(count !== 1) {
                answer.push(count);
            }
            count = 1; // count 초기화
        }
    }// for문 끝

    answer= answer.join('');

    return answer;
}

let str ='KKHSSSSSSSE'
console.log(solution(str));