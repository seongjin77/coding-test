function solution (str,t) {
    let answer =[];
    let p=1000;

    for(let i=0; i<str.length; i++) {
        if(str[i] === t){
            p = 0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }

    p =1000; // p초기화

    for(let i=0; i<str.length; i++) {
        if(str[str.length-1-i] === t){
            p=0;
            answer[str.length-1-i] = Math.min(p, answer[str.length-1-i])
        }
        else{
            p++;
            answer[str.length-1-i] = Math.min(p, answer[str.length-1-i])
        }
    }

    return answer;
}
let str = 'teachermode'
let t = 'e'
console.log(solution(str,t));