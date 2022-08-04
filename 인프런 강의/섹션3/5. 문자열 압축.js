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


function solution(s){
    let answer="";
    let cnt=1;
    s=s+" "; // s[i+1]에 공백값을 넣어주어 에러가 나지 않게 한다.
    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]) cnt++;
        else{
            answer+=s[i];
            if(cnt>1) answer+=String(cnt);
            cnt=1;
        }
    }
    return answer;
}