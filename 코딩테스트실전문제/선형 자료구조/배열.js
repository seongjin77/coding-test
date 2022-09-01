let nums = [];

nums['kiwi'] = '100';
nums['orange'] = '150';

console.log(nums); // 배열에도 문자를 넣을 수 있음

console.log(nums.length); // 하지만 배열 길이에는 영향을 주지 않음

delete nums['kiwi']; // delete로 삭제할 수 있는데 빈 공간이 생겨서 pop이나 Shift를 사용

console.log(nums);

// push , pop은 뒷쪽 배열 추가 삭제한다. unshift shift는 앞쪽 배열 추가 삭제한다.

// splice(a,b) a는 index 시작값 b는 a부터 카운트
// slice(a,b) 는 기본 객체에 영향을 미치지 않음. a는 인덱스 0포함 b는 인덱스0 포함하지 않는 인덱스순서
// 배열 병합은 concat() 사용

// includes() 는 찾는게 잇으면 ture 없으면 false 
// indexOf()는 찾는게 있으면 1 없으면 -1

// 배열을 문자열로 join() 다시 배열로 split

let num = [1, 2, 3, 4, 5];

let com = num.sort((a, b) => b-a);

console.log(com);


// find(cb)는 원하는거 하나만 반환 fliter(cb)은 원하는거 여러개 반환 , 누적은 reduce()
//some(cb)은 콜백함수의 조건이 하나라도 있으면 true반환, every(cb) 콜백함수의 조건이 전부다 맞아야지 ture반환.