
function solution(lines) {
    let min = Math.min(...lines.flat());
    let max = Math.max(...lines.flat());
    let arr = Array(max-min+1).fill(0);

    for (let line of lines) {
        line.sort((a,b)=>a-b);
        if (min < 0) {
            line[0]+=Math.abs(min)
            line[1]+=Math.abs(min)
        }
        for (let i = line[0]; i < line[1]; i++) arr[i]++;
    }

    return arr.filter(v=>v>1).length;
}

function solution(lines) {
    var answer = 0;
    const array = Array(200).fill(0);
    lines.forEach(([a, b]) => {
        if (a > b) {
            [a, b] = [b, a];
        }
        for (let i = a; i < b; i++) {
            array[i + 100] += 1;
        }
    });
    return array.filter(e => e > 1).length;
}