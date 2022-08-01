function solution (str) {
    let answer = 'YES'
    let len = str.length;
    str = str.toLowerCase();

    for(let i=0; i<Math.floor(len/2); i++) {

        if(str[i] !== str[len-1-i])  answer = 'NO'
    }

    console.log(answer);
}

let str="goofoG";
solution(str);