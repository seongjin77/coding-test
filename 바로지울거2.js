//let arr = [[0, 2], [-3, -1], [-2, 1]];
 let arr = [[0, 5], [3, 9], [1, 10]];
// let arr = [[-1, 1], [1, 3], [3, 9]];

function solution(lines) {
    var answer = 0;
    let answer_arr = [];
    
    lines.forEach((line) => {
        let Temporary_arr =[];
       for(let i=line[0]; i<=line[1]; i++){
           Temporary_arr.push(i);
       }
            answer_arr.push(Temporary_arr);
    })
    
    console.log(answer_arr)
    
    
    
    return answer;
}


solution(arr)