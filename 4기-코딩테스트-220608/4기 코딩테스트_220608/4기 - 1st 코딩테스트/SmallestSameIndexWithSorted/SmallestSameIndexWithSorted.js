/**
 * @param nums {number[]}
 * @param n {number}
 * @return {number}
 */

/* 
[문제 설명]
숫자 배열 nums와 숫자 n이 주어집니다. 이때 nums를 오름차순으로 정렬 후 n과 동일한 숫자 중 가장 작은 index를 반환하는 함수, solution을 완성해주세요.

[제한 사항]
- nums 내에 n과 일치하는 숫자가 없다면 -1을 반환합니다.

[입력 형식]
- nums는 1 이상 100 이하의 정수로 이루어진 길이가 100 이하의 배열입니다.
- n은 1 이상 100 이하의 정수입니다.

[출력 형식]
- 정렬된 nums 내에 n과 일치하는 숫자 중 가장 작은 index를 반환합니다.

*/


function solution(nums, n) {
  nums.sort((a, b) => a - b) // 양수가 나오면 순서 바꿈, 음수가 나오면 a가 앞으로 / 0이 나올시 그대로

  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      console.log(i);
      return i
    }
  }

  return -1

  
}

// export default solution

let array = [1, 25, 34, 3, 5, 13, 3, 6, 6]
solution(array, 6);