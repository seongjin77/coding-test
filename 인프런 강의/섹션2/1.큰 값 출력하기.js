function Maxnum (n){
    let answer;
    let num = [];

    num.push(n[0]);
    // for(let i=0; i<n.length; i++){
    //     if(n[i]<n[i+1]){
    //         num.push(n[i+1]);
    //     }
    // }

    for(let i=1; i<n.length; i++){
        if(n[i]>n[i-1]){
            num.push(n[i]);
        }
    }

    answer = num;


    console.log(answer);
}

Maxnum([7,3,9,5,6,12])