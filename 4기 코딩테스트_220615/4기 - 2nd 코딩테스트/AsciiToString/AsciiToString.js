/**
 * @param arr {number[]}
 * @returns {string}
 */
function solution(arr) {
  let result = ''

  arr.forEach(n => {
    result += String.fromCharCode(n)
  })

  return result
}

export default solution