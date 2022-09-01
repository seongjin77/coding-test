/* 고차함수

하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수.
매개변수로 전달되는 함수는 콜백 함수

임의정렬: Array.sort(callback function) 문자열로 변형되기 때문에 숫자오류, 대소문자 구분되어버림
반복 작업: Array.forEach()
콜백함수 결과 배열 반환: Array.map()
조건 만족하는 하나의 값 반환: Array.find()
조건 만족하는 값 배열로 반환: Araay.fliter()
누적 결과 값 반환: Array.reduce()


************필수 배열 함수 https://jae04099.tistory.com/17


*/

// forEach

let nums = [1, 2, 3];

for(let i = 0; i<nums.length; i++) {
    console.log(nums[i]);
}
////// 둘이 결과값 같음
nums.forEach( i => {
    console.log(i);
});

// for loop
let nums2 = [1, 2, 3, 4, 5];
let results = [];

for(let i = 0; i < nums2.length; i++){
    results.push(nums2[i]*2);
}
console.log(results);

/// map() 사용
let results_map = nums2.map(function(w){
    return w * 2;
})
console.log(results_map);

/// find() 함수 단하나의 값만 반환 /// filter는 두개 이상 반환
let user = [
    {name: 'kim', age: 17, job: false},
    {name: 'mmm', age: 27, job: false},
    {name: 'eee', age: 7, job: true}
];

let results_find = user.find(function(con){
    return con.job === false;
});

console.log(results_find);
// reduce() 요소 별 함수 수행 누적 결과 값 반환.

let nnn = [1, 2, 3, 4, 5];
let call_count = 0;

