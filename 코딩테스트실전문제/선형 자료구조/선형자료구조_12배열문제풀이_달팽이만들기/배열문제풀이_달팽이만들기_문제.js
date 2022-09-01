/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];
  //1. result를 2차원 배열로 만듬
  for(let i= 0; i<length; i++) {
    result[i] = [];
  }
  // 22.반복문 패턴
  //1. 첫번째 열만 length만큼
  //2. 두번째부터 짝수만큼 length-1개 만큼 생성
  //3. 방향바꿈
  let direction = 1;
  let x, y, num;
  x=y= num =0;
  x--;
    while(1){
      for(let i=0; i<length; i++){
          x += direction;
          result[y][x] = ++num;
      }

      length--;
      
      if (length === 0) break;

      for(let j =0; j < length; j++){
        y += direction;
        result[y][x] = ++num;
      }

      direction *= -1;

    }

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
