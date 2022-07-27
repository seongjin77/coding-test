function solution(n, A, B){
    let answer = [];



    for(let i=0; i<n; i++) {
        if(A[i]>B[i] && A[i] == 3 && B[i] == 1){
            answer.push('B');
        }
        else if(A[i]>B[i]){
            answer.push('A');
        }
        else if(A[i]=== B[i]){
            answer.push('D');
        }
        else {
            answer.push('B');
        }
    }


    console.log(answer);
}

let n = 5;
let A = [2,3,3,1,3]
let B = [1,1,2,2,3]
solution(n, A, B)