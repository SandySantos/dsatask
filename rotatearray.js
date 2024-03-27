const rotateArray = (array, num) => {
  const reversedArray = array.reverse();

  const slice1 = reversedArray.slice(0, num);
  console.log(slice1);
  const slice2 = reversedArray.slice(num);
  console.log(slice2);
  return [...slice1.reverse(), ...slice2.reverse()];
};
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([3, 8, 9, 2, 5], 2));
