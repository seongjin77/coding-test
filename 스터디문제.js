function solution(array) {
    var answer = [];
    // 1. 최빈값을 리턴
    // 2. 최빈값이 여러개일 경우 -1을 리턴
    
    let arr = new Set(array);
        arr = [...arr]
   // console.log(arr)
    for(let value of arr){     
        let num = 0;
        for(let i=0; i<array.length; i++){
            if(value === array[i]) num += 1
        }
        answer.push(num)
    }
    
 //  console.log(answer)
     let result = Math.max(...answer);
    // 만약 answer 배열에서 result값이 두개 이상이면 -1을 리턴
    // 아니라면 result값을 arr에서 찾아서 그 값을 리턴
   if(answer.filter(e => e === result).length >= 2) return -1
    else return arr[answer.indexOf(result)]
}

//////////////////////////////
function solution2(array) {

    let arr = new Map();
    
    for(let i of array){
        arr.set( i , (arr.get(i) || 0) +1)
    }
    
    console.log([...arr]);

    let result = [...arr].sort((a,b) => b[0] - a[0]); // 원소 먼저 정렬
        result.sort((a,b) => b[1] - a[1]); // 최빈값 정렬
    
    
    if( result.length === 1) return result[0][0]
    else if( result[0][1] === result[1][1]) return -1
    else return result[0][0]
        
    
}

let ccc = [1,2,2,2,5,5,5,5,7,8,9]
solution2(ccc);


/////////////

function solution(array) {

    
    let copy = [...array];
    let result = {};
    
    for(let i of array){
        result[i] = 0;
    }
    
    for(let i of array){
        
        if(copy.includes(i)){
            copy.splice(copy.indexOf(i),1);
            result[i]++
        }
    }
    
    result = Object.entries(result);
    //console.log(result)
    result.sort((a,b) => b[1] - a[1])
    console.log(result)
    
    return (result.length === 1 || result[0][1] > result[1][1]) ? parseInt(result[0][0]) : -1;
        
    
}