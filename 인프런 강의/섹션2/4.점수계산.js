function solution (n1) {
    let answer=0;
    let num =0;
    for(let i=0; i<n1.length; i++) {
        if(n1[i]===1){
            num += 1
            answer += num;
        }
        else if(n1[i]===0){
            num = 0;
        }
    }

    console.log(answer);
}

let n1 = [1,0,1,1,1,0,0,1,1,0];
solution(n1);