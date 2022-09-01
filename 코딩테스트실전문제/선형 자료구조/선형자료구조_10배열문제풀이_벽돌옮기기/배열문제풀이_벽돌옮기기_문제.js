/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
  let result = 0;
  let sum = 0;
  //1. 일단 배열 수를 다 더하고 길이만큼 나눠주어 하나당 몇개의 벽돌이 되어야 하는지 확인한다.
  for(let i=0; i< blocks.length; i++){

  sum += blocks[i];
    }
  sum /= blocks.length;
  //2. 나눠주고 난 수와 배열을 돌면서 각 원소마다 빼주어 양수가 나올경우 그 수를 더한다.
    for(let i=0; i< blocks.length; i++){
      if(blocks[i]-sum>0){
        result += blocks[i]-sum;
      }
    }
  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 4, 1, 7, 5],

  // TC: 2
  [12, 8, 10, 11, 9, 5, 8],

  // TC: 3
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
