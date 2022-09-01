let num = [
    [101,102,103],
    [201,202,303],
    [301,302,303]
];

for(let i =0; i<num.length; i++){
    for(let j = 0; j < num[i].length; j++){
        console.log(num[i][j]);
    }
}

let fruits = [
    ['strawberry', 50],
    ['banana', 100],
    ['ice', 150]
];

for (let i =0; i < fruits.length; i++) {
    console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`)
    
}