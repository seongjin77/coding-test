function solution(arr) {
  let answer;
  // 내림차순으로 정리한다. (각자리수의 합이 동일할 경우 더 큰 수를 얻기 위해)
  // 각각의 배열값을 문자열로 만들어서, 각 자리수를 쪼개 더한다.
  // 데이터에서 가장 큰 숫자를 찾는다. 해당 인덱스 번호에 값을 내림차순 한 원본 데이터에서 찾는다.

  arr.sort((a, b) => b - a);
  let str;
  let num = 0;
  let maxNum = 0;
  let 비교배열 = [];
  for (let i = 0; i < arr.length; i++) {
    str = String(arr[i]); // arr는 문자열로 바꿈

    for (let j = 0; j < str.length; j++) {
      num += parseInt(str[j]); 
    }// 각자리수 합 for문
    비교배열.push(num) // 원본 배열과 위치는 똑같으니, 자리수 합 배열의 제일 큰 수의 인덱스를 알아 원본 배열의 원래값을 찾기 위해서.
    // [128, 460, 603, 40, 521, 137, 123]
    // [  9, 8, 10, 11, 11, 6,  4]
    if (maxNum < num) {
      maxNum = num;
    }
    num = 0; // 각 자리수 합의 초기화
}// 원본 배열 for문

  answer = arr[비교배열.indexOf(maxNum)];

  console.log(answer)
}

let arr = [128, 460, 603, 40, 521, 137, 123];
solution(arr);
