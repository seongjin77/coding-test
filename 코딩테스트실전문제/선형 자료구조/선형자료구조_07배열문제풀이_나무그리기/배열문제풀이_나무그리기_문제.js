/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "\n";

  for(let i = 0; i < height; i++) {
      
    for(let j = 0; j < height-1-i; j++) {
          str += ' ';
      }
      
      for(let j =0; j< 2*i+1; j++) {
          str += '*';
      }
      
      str += '\n';

  }



  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
