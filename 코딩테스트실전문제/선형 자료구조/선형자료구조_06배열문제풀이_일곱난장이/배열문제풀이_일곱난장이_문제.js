/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  //1. 총합을 구해서 -100을 하면 남는 값이 두 난장이의 합이다
  let sum = dwarf.reduce((acc, cur)=> acc + cur)

  sum -= 100;

  let faker =[];
  //2. for문을 돌려 if만약 두 값이 합과 같으면 두 요소를 출력한다.
  for(let i=0; i<dwarf.length; i++) {
    for(let j =i+1; j<dwarf.length; j++) {
      if (dwarf[i]+ dwarf[j]===sum){
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }
    if(faker.length!==0) break;
  }//for 문 끝

  //3. faker 두명 제외하고 나머지 배열값을 return한다.
  for(let i = 0; i< dwarf.length; i++){
      if(faker[0]!==i && faker[1]!==i) result.push(dwarf[i]);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
