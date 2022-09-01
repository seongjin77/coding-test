/*** 3. 윤년 판별기 ***/

/* user code */
function answer(year) {
  let result;

  // 4의 배수이고 100의 배수가 아닐때
  // 400의 배수일때
  if((year%4===0 && year%100!==0) || year%400===0){
    result = true;
  }
  else {
    result = false;
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,
  // TC: 2
  100,
  // TC: 3
  124,
  // TC: 4
  247,
  // TC: 5
  400,
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
