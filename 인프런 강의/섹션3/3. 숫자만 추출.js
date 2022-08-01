function solution(str){
  let answer="";
  // 숫자가 아닌지 판별하는 함수를 사용.!!!
  for(let x of str){
      if(!isNaN(x)) answer+=x;
  }  
  return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));