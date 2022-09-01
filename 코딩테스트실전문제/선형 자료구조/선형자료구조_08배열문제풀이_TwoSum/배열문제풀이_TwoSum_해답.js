/* two sum */

/* user code */
function answer(nums, target) {
  let map = {}; // key, value

  // target - nums[i] = nums[j]
  // for 2중 O(n^2) -> for 1중 O(n)
  // target - nums[i] = nums[j];
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) { // map[num[j]] 맵객체의 키 값이 정의되었다면
      return [map[target - nums[i]], i];  // map[키]에 있엇던 값을 불러옴.
    }

    map[nums[i]] = i;
    console.log(map);
  }

  return [];
}

/* main code */
let input = [
  // TC: 1
  [[2, 7, 11, 15], 9],

  // TC: 2
  [[3, 2, 4], 6],

  // TC: 3
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
