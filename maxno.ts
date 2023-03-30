function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  const numbers = [1, 5, 3, 9, 2];
  const maxNumber = findMax(numbers);
  console.log(maxNumber); // Output: 9