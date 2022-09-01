/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sum;

  // 앞 인수와 뒤 인수를 반복해서 뺀다
  // 배열에 저장한다
  // 음수가 나오면 프로그램을 종료한다.
  while (1){

    sum = s - e;
    s = e;
    e = sum;

    if(e<0) break;
    sequence.push(e);

  }
  /* 
    13 7 6 1 5
  
  */

  return sequence;
}

/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
