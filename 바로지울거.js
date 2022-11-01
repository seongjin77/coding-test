 // let arr =[ [ 0, 1, 2 ], [ -3, -2, -1 ], [ -2, -1, 0, 1 ] ]
 //let arr =[[0,1],[2,3,4,5],[3,4,5,6,7,8,9]]
 // let arr = [[-1,0,1],[1,2,3],[3,4,5,6,7]]
 let arr =[[ 0, 1, 2, 3, 4, 5 ],[3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9,10]]
function check (arr){

    let result=[];
    
    let temporary_arr1 =[]
    for(let i=0; i<arr[0].length; i++){
        for(let j=0; j<arr[1].length; j++){
            if(arr[0][i]===arr[1][j]) temporary_arr1.push(arr[0][i])
        }
    }
    if(temporary_arr1.length >= 2) result.push(temporary_arr1);
    ///////////
    let temporary_arr2 =[]
    for(let i=0; i<arr[0].length; i++){
        for(let j=0; j<arr[2].length; j++){
            if(arr[0][i]===arr[2][j]) temporary_arr2.push(arr[0][i])
        }
    }
    if(temporary_arr2.length >= 2) result.push(temporary_arr2);
    ///////////
    let temporary_arr3 =[]
    for(let i=0; i<arr[1].length; i++){
        for(let j=0; j<arr[2].length; j++){
            if(arr[1][i]===arr[2][j]) temporary_arr3.push(arr[1][i])
        }
    }
    if(temporary_arr3.length >= 2) result.push(temporary_arr3);
    
    console.log(result);
}

check(arr);
