function solution(n, lost, reserve) {
    var answer = n-lost.length;
    // 처음 가능한 학생수 = n - lost.length
    // lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer++ 
    // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문
    
    let realLost=lost.filter( l =>!reserve.includes(l)); // 여벌 체육복이 있는 학생 중에서 도난당한 학생이 있을 수 있음.
    let realReserve=reserve.filter((r)=>!lost.includes(r)); // 진짜 빌려주는 학생
    answer+=lost.length-realLost.length; //잃어버린 명단수 - 여벌복도 없는 진짜 잃어버린 명단 학생의 수
    
    realLost.sort((a,b)=>a-b); // 체육복은 체격순으로 번호가 매겨져 있기 때문
    
    realLost.forEach((l)=>{
        if(realReserve.length===0){  // 빌려주는 사람이 없는 경우
            return;
        }
        
        if(realReserve.includes(l-1)){ 
            realReserve=realReserve.filter((r)=>r !== l-1); 
            answer++; // 체육가능인원 하나 추가
        }
        else if(realReserve.includes(l+1)){
            realReserve=realReserve.filter((r)=>r !== l+1);
            answer++; // 체육 가능인원 하나 추가
        }
        
    })
    return answer;
}