function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    let len=s.length;
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i]!=s[len-i-1]) return "NO";
    }
    console.log(answer)
}
let str = "goooG";
solution(str);

const solution = (str) => {
    let reverse = [str.toLowerCase()].reverse().join()
    if (str.toLowerCase() === reverse) return 'YES'
    else return 'NO'
  }