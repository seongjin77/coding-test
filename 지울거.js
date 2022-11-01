let arr = [1,2,2,2,3,3,3,4,13,13,13]

let a = new Map();

for(let i of arr){
    a.set( i, (a.get(i) || 0)+1)
}

// const getNumForComparison = (e) => parseInt("" + e[0] + e[1]);
// let check = [...a].sort((a, b) => getNumForComparison(b) - getNumForComparison(a))

let check = [...a].sort((a,b) => b[0]- a[0]);
check = check.sort((a,b) => b[1] - a[1] );

// 문제 : 배열 안에 원소가 몇개 있는지 배열로 구분했습니다. 이것을 내림차순으로 정렬하고 싶습니다.
// 문제점: 제가 원하는 것은 [13,3],[3,3],[2,3],[4,1],[1,1] 이렇게 정렬하는 것입니다.
         // 현재 최빈값 순으로 정렬을 했지만, 원소는 오름차순으로 정렬되어 있습니다. 앞에 원소도 내림차순으로
         // 정렬 할 수 있는 방법이 있을까요??
console.log(check);


//let max = Math.max(...[...a.values()])

// let obj = {
//     '3': 10,
//     '2': 5,
//     '1': 1,
// }



// console.log(b);


console.log(undefined == null)