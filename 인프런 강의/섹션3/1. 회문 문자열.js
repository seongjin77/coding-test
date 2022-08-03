// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase();
//     let len=s.length;
//     for(let i=0; i<Math.floor(len/2); i++){
//         if(s[i]!=s[len-i-1]) return "NO";
//     }
//     console.log(answer)
// }

const solution = (str) => {
    let copy =[...str];
    let reverse = copy.reverse().join('')
    
    if (str.toLowerCase() === reverse) return 'YES'
    else return 'NO'
}

let str = "goooGy";
console.log(solution(str));

