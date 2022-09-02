function solution(arr){
    let answer;
    let m = arr.length;
    let n = arr[0].length;
    

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(arr[i][j]){
               //만약 첫번째 수 보다 작은것을 체크한다
               // 작은게 없으면 카운트 1 증가
               // 하나라도 반례가 있으면 for문 탈출

            }
        }// 각 학생수
    }// m번의 시험


    console.log(answer);
};


function solution(test){
    let answer=0;
    m=test.length;
    n=test[0].length;
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            let cnt=0;
            for(let k=0; k<m; k++){
                let pi=pj=0;
                for(let s=0; s<n; s++){
                    if(test[k][s]===i) pi=s;
                    if(test[k][s]===j) pj=s;
                }
                if(pi<pj) cnt++;
            }
            if(cnt===m) answer++;
        }
    }
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));