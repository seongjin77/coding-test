/* 객체의 얕은 복사 방법 */

let user = {
    name: 'seongjin',
    age: 28,
    size: { height : 174, weight: 62}
};

/*  1. for loop를 통한 방법 */

// let admin ={}; // 아예 새로운 객체를 생성한다. let admin = user; 이렇게 쓰면 주소값을 그대로 복사하는거임

// for (let key in user){
//     admin[key] = user[key];
// };

/*  2. Object.assing() 함수를 사용해서 복사 */

// let admin = Object.assign({}, user);

/*  3. 전개연산자를 통한 복제  */

// let admin = {...user};

// admin.name= 'kim';

/* //////////////////////////깊은복사 구간 */

// function copyObj(obj) {
    
//     let result = {};
//     for (let key in obj) {
//         if(typeof obj[key] === 'object') result[key] = copyObj(obj[key]);
//         else result[key] = obj[key];
//     }
//     return result;
// }

// let admin = copyObj(user);

// console.log(admin);

////////////////////////////////// 깊은복사 json 함수를 통한 방법

// stringify는 문자열로 변경 , 이때 원래 객체와 연결 끊김. parse를 
let admin = JSON.parse(JSON.stringify(user));

admin.size.height = admin.size.height + 1;

console.log(admin.size.height); // 1증가된 결과. 원래 객체와 연결 끊김
console.log(user.size.height); // 원래 중첩객체의 값. 



// console.log(admin.name);
// console.log(user.name);
// console.log(admin.age);

