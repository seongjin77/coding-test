//let arr =[];
// let arr =[[3,4,5]];
//let arr = [ [ 0, 1 ], [ -2, -1 ] ]; 원래의 선분은 [-2 ~ 1] / [-2 -1] / [0, 1] 
// let [[0,1],[1,2]]
// let arr = [[ 3, 4, 5 ],[ 1, 2, 3, 4, 5 ],[ 3, 4, 5, 6, 7, 8, 9 ]];
 function result(arrr){
    if(arrr.length === 0) return 0;
    else if(arrr.length === 1) return arrr[0].length-1;
    else if(arrr.length === 2) {
        for(let i=0; i<arrr[0].length; i++){
            if(!arrr[1].includes(arrr[0][i])) return arrr[0].length + arrr[1].length -2;
        }
    }
    else{
       return new Set(arrr.flat()).size -1
    }
}

  console.log(result(arr)); 

// let arr = []
/// arr === [] 을 확인할 수 없나?