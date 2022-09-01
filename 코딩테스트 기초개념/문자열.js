let text = 'hello\n world\n!!!';

console.log(text.indexOf('l'));
console.log(text.indexOf('l',5));
console.log(text.lastIndexOf('l'));

console.log(text.includes('hello')) // 포함하는지 확인, 대소문자 구분
console.log(text.startsWith('ello')); // 실제 시작하는 단어 찾기
console.log(text.startsWith('ello',1)); // 실제 두번째 단어부터 시작하는 단어 찾기
console.log(text.endsWith('!!!')); // 뒤부터 단어 검색하기

console.log(text.slice(0,5)); // 0부터 인덱스5순서까지 추출하기
console.log(text.slice(-4)); // 뒤에서부터 추출
console.log(text.substring(6,2)); // slice와의 차이점은 앞에 숫자가 더 클 경우 작동이 안되는데 서브는 자동으로 바꿔줌

console.log(text.substr(1,1)) // 인덱스 순서 1부터 length길이 1개 추출하기

let fruits = 'apple banana melon';
let result = fruits.split(' '); // 공백기준으로 잘라서 배열로 보관
console.log(result);
console.log(result[2]); // 인덱스 번호 부여해서 가져올 수 있음

let hi ='hello';
let hiresult = hi.split(''); // '' 사이에 아무것도 안 적어주면 글자단위로 쪼개짐
let hiresult2 = hi.split('',3); // 뒤에 숫자는 배열 몇번까지 가져올 건지 정할 수 잇음
console.log(hiresult);
console.log(hiresult2);
