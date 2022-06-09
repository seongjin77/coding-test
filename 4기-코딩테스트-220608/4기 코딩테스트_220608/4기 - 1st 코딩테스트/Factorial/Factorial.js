/**
 * @param n {number}
 * @returns {number}
 */

/* 
[문제 설명]
자연수 n이 주어질 때 1부터 n까지의 모든 자연수의 곱을 출력하는 함수, solution을 완성해주세요.

예를 들어, n의 값이 5 일 때, 1*2*3*4*5 로 결과는 120입니다.

[입력 형식]
- n은 1 이상 12 이하의 자연수입니다.

[출력 형식]
- n까지의 곱을 출력합니다.
*/

function solution(n) {
  let result = 1

  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result
}

export default solution