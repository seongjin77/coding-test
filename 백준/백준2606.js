const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split('\n');

const n = Number(input[0]);
const m = Number(input[1]);
let graph = [];

// 인접리스트 템플릿
for(let i = 1; i<= n; i++) graph[i] = [];
for(let i = 2; i <= m + 1; i++ ){
    let [x,y] = input[i].split(' ').map(v => Number(v));
    graph[x].push(y);
    graph[y].push(x);
}

// 스택을 사용한다. pop 이용, 재귀. 1번과 연결되어 있는 모든 간선의 수를 구하여라

const visited = Array.from({ length : n + 1}).fill(0);

let cnt = 0;
const dfs = (index) => {
    visited[index] = true;
    cnt++
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for( y of graph[index]){
      if(!visited[y]) dfs(y)
    }

}

dfs(1);

console.log(cnt - 1);