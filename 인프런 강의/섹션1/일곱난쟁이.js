function dwarf(aa){
  let sum = aa.reduce((a,b) => a+b,0);


  for(let i=0; i<8; i++){
    for(let j=i+1; j<9; j++){
      if(sum- (aa[i] + aa[j]) === 100){
          aa.splice(j,1);
          aa.splice(i,1);
      }
    }
  }

  return aa
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];


console.log(dwarf(arr));
