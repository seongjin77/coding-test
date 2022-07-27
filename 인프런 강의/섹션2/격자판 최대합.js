function solution(array){
    let answer =0;
    let sum = 0;
    for(let i=0; i<array.length; i++){
       for(let j=0; j<array.length; j++){
        sum += array[i][j]
       } 
       answer += array[i][i];
        
    }

    console.log(answer);
}

///////////////위에것이 내가 푼거


function solution(arr){  
    let answer=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    let sum1=sum2=0;
    for(let i=0; i<n; i++){
        sum1=sum2=0;
        for(let j=0; j<n; j++){
            sum1+=arr[i][j]; // 가로줄 합
            sum2+=arr[j][i]; // 세로줄 합
        }
        answer=Math.max(answer, sum1, sum2); // 각 [i]번째 줄 세로/가로 합을 비교해서 answer에다가 가장 큰 값을 넣어줌 계속해서 비교
    }
    sum1=sum2=0; // 초기화 
    for(let i=0; i<n; i++){
        sum1+=arr[i][i];
        sum2+=arr[i][n-i-1];
    }  
    answer=Math.max(answer, sum1, sum2); // 대각선 합과 가로,세로줄 합 중에서 제일 큰 값 중에서 비교함.
    return answer;
}