const removeDuplicates = (nums) => {
  let original = [];

  for (let i of nums) {
    if (!original.includes(i)) {
      original = [...original, i];
    }
  }
  return original.length;
};
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5]));

// const removeDuplicates = (array) => {

//     let i = 0;
//     for (let j = 1; j <nums.length; j++) {
//       if (nums[j] !== nums[i]) {
//         i++;
//         nums[i] = nums[j];
//       }
//     }

//     return i+1;
//   };
