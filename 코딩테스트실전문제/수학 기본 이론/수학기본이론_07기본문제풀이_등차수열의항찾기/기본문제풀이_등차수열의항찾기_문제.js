/* 1. 등차수열의 항 찾기 */

/* user code */
function answer(a, d, n) {
  let 항정답 = 0;

  for(let i = 0; ; i++){

    num = a + d*i

    if(num>n) return 항정답 = i;

    if(num===n) 항정답 = i+1;




  }

 
  return 항정답;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
