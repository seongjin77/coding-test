function solution(maps) {
    const xLength = maps.length; // 행
    const yLength = maps[0].length; // 열
    const dx = [0, 0, -1, 1];  // 좌표이동  상,하,좌,우 순으로
    const dy = [-1, 1, 0, 0];  

const bfs = () => {
        const queue = [[0, 0, 1]];

            while (queue.length) {
    const [x, y, count] = queue.shift(); // 배열 디스트럭처링 할당.
    if (x === xLength - 1 && y === yLength - 1) {
        return count;  // 배열 마지막 행 마지막 열에 도착했는지 확인.
    }
    if (maps[x][y]) {  //1.if 배열이 1인지 확인 (벽인지 확인하는 것.)
               maps[x][y] = 0; // 다시 탐색 못하게 0으로 바꿈
                     for(let i=0; i<4; i++){
                            const nx = x + dx[i];
                            const ny = y + dy[i]; 
        if (nx >= 0 && nx < xLength && ny >= 0 && ny < yLength && maps[nx][ny]) {
                    queue.push([nx, ny, count + 1]);
                    }  // 좌표가 배열 범위를 넘어가지 않는지, 다음 방문할 장소가 벽이 아닌지 확인
                }// for문끝


    }// 1.if끝
}// while문끝
return -1;
};// bfs끝
return bfs();
}