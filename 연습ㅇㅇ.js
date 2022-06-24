function solution(n, lost, reserve) {
    let answer = n-lost.length // 체육 가능은 우선 lost 애들 제외한 값
    reserve.sort()
    lost.sort()

    for(let i = 0; i < lost.length; i++){
      if(reserve.includes(lost[i])) { // 옷 두 개인 애가 하나 잃어버렸을 때
        reserve = reserve.filter(el => el !== lost[i]) // reserve에서 지우고
        lost = lost.filter(el => el !== lost[i])
        answer+=1 // 체육 가능 한 명 추가
      }
      else if(reserve.includes(lost[i]-1)){ // 1 작은 애 일 때
        reserve = reserve.filter(el => el !== lost[i]-1) // 빌려준 reserve 지우고
        answer+=1 // 체육 가능 한 명 추가
      }
      else if(reserve.includes(lost[i]+1)){ // 1 큰 애 일 때
        reserve = reserve.filter(el => el !== lost[i]+1) // 빌려준 reserve 지우고
        answer+=1 // 체육 가능 한 명 추가
      }
    }
    return answer;
}