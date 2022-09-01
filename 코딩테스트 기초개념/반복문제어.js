/* label 예제 */
// 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
// break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어야함

dan: for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
        console.log(i+'*'+j+'='+i*j);
        break dan;
    }
};
/////////////////////////
const num = 10;
let sum = 0;
// 0부터 10까지 짝수면 더해서 구한뒤 출력해라
for(let i =0; i<=num; i++){
    
    if((i%2)===0){
        sum += i;
    };
    
}
console.log('합 :'+sum);