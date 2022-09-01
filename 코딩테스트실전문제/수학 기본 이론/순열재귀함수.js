let input = ['a', 'b', 'c'];
let count = 0;

function permutation(arr, s, r){
    
    if(s === r) {
        count++;
        console.log('탈출', arr);
        return;
    }
    for( let i = s; i < arr.length; i++){
        [arr[s],arr[i]] = [arr[i],arr[s]] ;
        console.log('위에 것 :'+[arr[s],arr[i]] );
        permutation(arr, s + 1 , r);/// 재귀함수
        [arr[s],arr[i]] = [arr[i],arr[s]] ;
        console.log('아래 것 :'+[arr[s],arr[i]] );
    }
};

permutation(input,0,2);