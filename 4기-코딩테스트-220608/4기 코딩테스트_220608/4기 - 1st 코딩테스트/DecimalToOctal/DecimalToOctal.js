/**
 * @param n {number}
 * @returns {string}
 */

/* 
문제 설명

자연수 n이 주어질 때 n을 8진수로 변환하여 출력하는 함수, solution을 완성해주세요.

예를 들어, n의 값이 299 일 때, 결과는 '453' 입니다.

[입력 형식]
- n은 1 이상 100,000,000 이하의 자연수입니다.

[출력 형식]
- n을 8진수로 변환하여 출력합니다.
*/

function solution(n) {
  return n.toString(8)
}

export default solution