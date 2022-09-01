/* 9. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = "";

  let tmp_list = str.split(" ");

  console.log(tmp_list);

  for(let item of tmp_list) {
    fix_str += item[0].toUpperCase() + item.slice(1)+ ' ' ;
  }

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
