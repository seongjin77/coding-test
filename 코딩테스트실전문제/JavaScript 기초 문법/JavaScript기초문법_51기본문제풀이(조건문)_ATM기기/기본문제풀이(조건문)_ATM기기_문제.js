/*** 4. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  // 5의 배수 금액만 취급한다
  // 인출할때 0.5만원 즉 오천원의 수수료가 필요하다
  // 인출할 금액과 계좌의 총 금액을 입력받아, 계좌의 남은 금액을 반환하는 함수를 작성하라

  if(withdraw%5!==0){
    result = total;
  }
  else if(withdraw + 0.5 > total){
    result = total;
  }
  else {
    result = total - withdraw - 0.5;
  }
  

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
  [300, 40]
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
