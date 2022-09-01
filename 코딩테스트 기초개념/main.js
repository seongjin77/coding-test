const fs = require('fs');
const input = fs.readFileSync("./코딩테스트/input.txt", "utf8");

console.log(input);

const TESTCASE = 5; // 상수는 보통 대물자로 표기

// 한 줄에 여러 변수 선언함
let name = 'seongjin',
    age = 27,
    msg = 'hello';

    console.log(age);

////// 배열에 함수 저장 // 호출: list[2]();
let list = [
'kim',
28, 
function keke (){
    console.log('hello');
    }
];
//////// obj.kkk();
let obj = {
   name: 'kim',
   age: 28,
   kkk(){
        console.log('hello');
   } 
};
/////
let objj = {

    x : function (){
        console.log('hello 작동합니다');
    }



};

///
function sj (){
    console.log('hello');
}

obj.kkk()
list[2]();
objj.x();