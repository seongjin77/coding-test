let num = 10;

let num1 = num2 = num3 = 31; // 각 변수에 새로운 데이터 값이 생성되어 할당되는 것.

num1 += num;
console.log(num1);


/* 문자열 비교 연산자 */
console.log('A'<'a'); // 소문자가 더 값이 높다
console.log('Zaaa' > 'Aaaa'); // 알파벳이 더 뒤에 있으므로 큰 값으로 판단.
console.log('Hi' > 'He'); // 알파벳이 뒤로 갈 수록 더 큰 값으로 판단.
console.log('Hello' > 'Helloo'); // 문자열이 더 많을수록 더 큰 값으로 판단.
console.log('5'< 10); // 문자열 5를 숫자로 타입변환 후 비교
console.log(true == 1) // true를 1로 암묵적 타입 변환 후 비교
console.log(false != 123) // 0 이 아닌 숫자는 true이므로 != not연산자에 의하면 결과는 트루
console.log(true === 1); // 암묵적 타입변환이 일어나지 않아서 결과는 false

let result = function (){
                    console.log('함수가 잘 작동합니다');
                            }

result();