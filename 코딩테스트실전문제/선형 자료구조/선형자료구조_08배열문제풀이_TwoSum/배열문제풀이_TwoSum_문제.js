/* two sum */

/* user code */
function answer(nums, target) {
  
  //1. 첫번째 배열을 돌면서 만약  target과 숫자가 같으면 그 숫자 추출하기
    for(let i=0; i<nums.length; i++) {
      for(let j= i+1; j<nums.length; j++) {
        if(nums[i]+ nums[j]=== target){
          return [ i , j]
        }
      }
    
    }


  //2. 그 숫자를 오름차순으로 반환.


}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
