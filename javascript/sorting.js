const numbers = [5, 2, 9, 1, 5, 6];

// using compatator concept
numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);