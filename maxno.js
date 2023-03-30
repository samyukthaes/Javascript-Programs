function findMax(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var numbers = [1, 5, 3, 9, 2];
var maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 9
