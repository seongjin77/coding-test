/**
 * 
 */
function solution(array, s) {
  let result = 0

  for (let i = 0; i < array.length; i++) {
    const prefix = array[i]
    if (s.indexOf(prefix) === 0) {
      result++
    }
  }

  return console.log(result)
}

let array = ['n', 'nav', 'nev']
let s = 'naver';
solution(array, s);