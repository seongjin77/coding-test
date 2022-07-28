function solution(students){
    let answer = 0;
    let Maxnum =Number.MIN_SAFE_INTEGER;
    for(let i=0; i<students.length; i++){
       

       if(Maxnum<students[i]){
            Maxnum = students[i];
            answer ++;
       }
        
    }


    console.log(answer);
}

solution([130,135,148,140,145,150,150,153])