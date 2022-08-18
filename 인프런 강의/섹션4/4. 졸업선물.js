function solution(arr, M){
    let answer=0;
    let n = arr.length;
    arr.sort((a,b)=> (a[0]+a[1]) - (b[0]+b[1]));

    for(let i=0; i<n; i++){
        let money = M- (arr[i][0]/2+arr[i][1])
        let cnt = 1;
        for(let j=0; j<n; j++){
            if()
        }

    }

 

    console.log(answer);
};
let M = 28;
let arr = [[6,6],[2,2],[4,3],[4,5],[10,3]]
solution(arr,M);

