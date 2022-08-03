function solution(str){
  let answer="";
  // 숫자가 아닌지 판별하는 함수를 사용.!!!
  for(let i=0; i<str.length; i++){
      if(!isNaN(str[i])) answer+=str[i];
  }  
   return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));