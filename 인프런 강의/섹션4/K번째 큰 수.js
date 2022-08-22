function solution(arr,selectNumber){

const sum = []; // 3장 뽑아 더한 합을 담아놓을 배열

const getCombinations = function (arr, selectNumber) {
  const results = [];
  
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); 
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

   return results; //조합 결과 확인용
}

let 조합 = getCombinations(arr, selectNumber); // 조합 함수

for(let i=0; i<조합.length; i++){
  let 합 = 0;
  for(let j=0; j<selectNumber; j++){
    합 += 조합[i][j];
  }
  sum.push(합)
}
const set = new Set(sum); // 중복제거
const noOverlapsum = [...set];
noOverlapsum.sort((a,b)=> b-a); // 내림차순 정렬

return noOverlapsum[selectNumber-1];


}
let arr = [13,15,34,23,45,65,33,11,26,42];
let k = 3;
console.log(solution(arr,k))

