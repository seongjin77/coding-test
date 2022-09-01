/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];

 //1. 각 자리수 별 인덱스 숫자 번호 초기화 시켜둠
 for(let i =0; i<10; i++) {
    result[i] = 0;
 };

 //2. 사이 숫자를 배열에 담고, 그 각각의 수를 나누어 나머지를 구하고 숫자를 하나하나 쪼갠다.
 let num;
 for(let i = s; i<=e; i++) {
  num = i;
  //2-1 나머지를 구한다. 나머지가 0이 아닐때까지 반복
  while(num!==0){
    result[num % 10]++; // 10으로 나누어주면 1의 자리를 구할 수 있는데 그 1의자리 숫자의 인덱스 번호 개수를 하나 증가시킨다.
    num/=10;
    num = parseInt(num);
  }
 }
 
  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
