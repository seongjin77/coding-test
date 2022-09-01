let result;

function recursive(number){

    if(number ===0 || number=== 1){
        return number;
    }

    return recursive(number-1) + recursive(number -2);

}

result = recursive(5);
console.log(result);