function solution (num){
    let answer = [];
    let copy = [...num]
    copy.sort((a,b)=> b - a);
    // 100 100 100 95 48 중복된 경우도 indexOf는 맨 처음 번호만 추출하여서 문제없음
    // 100 92 89 87 76 
    for(let i=0; i<num.length; i++){
        answer.push(copy.indexOf(num[i])+1); // num의 i번째 요소가 몇번째인지 찾음.
    }

    console.log(answer);
}

let num = [87,89,92,100,76]
solution(num);

////////////////////위에것이 내가 푼 문제
function solution(arr){  
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j]>arr[i]) answer[i]++;
        }
    }             
    return answer;
}