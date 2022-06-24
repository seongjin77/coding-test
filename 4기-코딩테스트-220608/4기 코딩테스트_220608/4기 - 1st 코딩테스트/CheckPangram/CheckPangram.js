/**
 * @param s {string}
 * @returns {boolean}
 */

/* 
[문제 설명]
문자열 s가 주어집니다. s가 pangram 인지 판단하는 함수, solution을 완성해주세요.
pangram이란 모든 알파벳이 사용된 문장을 말합니다.

[입력 형식]
- s는 길이가 1 이상 1,000 이하인 문자열입니다.
- s는 소문자 알파벳과 공백(' ')으로만 구성됩니다.

[출력 형식]
- 문자열이 pangram인지 구합니다.
*/

function solution(s) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < ALPHABET.length; i++) {
    const c = ALPHABET.charAt(i)
    console.log(c);
    if (s.indexOf(c) < 0) {
      return false
    }
  }

  return true
}

// export default solution
let arr = 'addddddddddffffffffffffff'
console.log(solution(arr));
