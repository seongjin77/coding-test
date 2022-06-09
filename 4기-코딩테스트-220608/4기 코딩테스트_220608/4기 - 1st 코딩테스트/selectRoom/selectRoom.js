/* 
배열 A에는 각 방마다 탈출하는데 걸리는 시간이 적혀있습니다.
이 방의 구조는 한번 넘어갈때마다 문이 1개씩 늘어나고 각 문 마다 탈출에 걸리는 시간은 모두 다릅니다.

예를들어 배열 A에 아래와 같이 시간 정보가 들어있다고 가정합니다.
A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]]

1
2 5
7 10 1
9 4 4 5

최상단에서 시작하여 이동할 때는 대각선 아래 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동이 가능하며 이동했을 때 배열에 주어진 시간만큼 대기한 후 다음 칸으로 이동할 수 있습니다.

이때 최소한의 대기 시간으로 최하단의 방을 탈출하는데 걸리는 시간을 구하는 함수를 작성하세요.

// 

위 그림에서 최단 시간은 1->5->1->4 로 총 11이 됩니다.

[입력]
대기시간 정보가 입력된 2차원 배열 A

[출력]
최소 대기 시간

*/


function solution(A) {
    var arr = [A[0]]; // arr = [[1]]
  
    while(arr.length != A.length){ // arr배열 길이와 A배열 길이가 같지 않으면 계속 반복
      arr.push([]); // arr = [[1], []] arr에 빈배열 추가
      
      for(var i = 0; i < arr.length; i++){ // arr.length :2
        if(i == 0){
          arr[arr.length-1].push(A[arr.length-1][0] + arr[arr.length-2][0]);
          console.log( 'i가 0일때 '+arr)
        }// if끝 
        else if(i == arr.length-1){
          arr[arr.length-1].push(A[arr.length-1][arr.length-1] + arr[arr.length-2][arr.length-2]);
          console.log( 'i가 arr.length-1일때 '+arr)
        }// else if 끝
        else{
          arr[arr.length-1].push(A[arr.length-1][arr[arr.length-1].length]+Math.min(arr[arr.length-2][arr[arr.length-1].length], arr[arr.length-2][arr[arr.length-1].length-1]));
          console.log( 'i가 그밖의일때 '+arr)
        }// else 끝
      }
    }
    console.log( '정답: '+Math.min.apply(null, arr[arr.length-1]));
    return Math.min.apply(null, arr[arr.length-1]);
    
}
  

let A = [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]];

solution(A);