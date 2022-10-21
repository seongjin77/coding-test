function solution(denum1, num1, denum2, num2) {
    let 분자 = (denum1 * num2) + (denum2 * num1);
    let 분모 = num1 * num2;

    let 최대공약수 = 0;

    for(let i = 1; i <= Math.min(분자, 분모); i++){
        if(분자 % i === 0 && 분모 % i === 0){
            최대공약수 = i;
        }
    }

    return [분자 / 최대공약수, 분모 / 최대공약수];
}

function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    
     let maxNum = function(num1,num2){
        if(num1%num2 === 0){
            return num2
        }
        else {
           return maxNum(num2, num1%num2)
        }
    }
    
   
    let minNum = num1 * num2 / maxNum(num1,num2)
    
    answer[0] = denum1 * (minNum/num1) + denum2 * (minNum/num2)
    answer[1] = minNum 
    
    return answer;
}