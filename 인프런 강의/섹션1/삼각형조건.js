// 제일 긴 변의 길이가 나머지 두 변의 길이보다 작아야한다.
function triAngle(a,b,c){
    let max = Math.max(a,b,c);
    let rest = a+b+c - max

    if(max < rest){
        return 'YES'
    }
    else{
        return 'NO'
    }
}



console.log(triAngle(13,33,17));