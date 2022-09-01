let result;

function recursive (s, t, number){
    //멈출조건
    if( number ===1){
        return s;
    }

    //반복할 코드
    return recursive(s, t, number-1) + t;
};

result = recursive(3, 2, 5);
console.log(result);