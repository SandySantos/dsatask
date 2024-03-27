const missingNumber = (array) => {
  const sumOfIntegers =
    (array[array.length - 1] * (array[array.length - 1] + 1)) / 2;

  let sumOfElements = 0;
  for (let i of array) {
    sumOfElements += i;
  }

  return sumOfIntegers - sumOfElements;
};

console.log(missingNumber([1, 2, 3, 4, 6, 7, 8]));
console.log(missingNumber([1, 3, 4, 5, 6, 7, 8, 9, 10]));
