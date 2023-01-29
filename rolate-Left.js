//function no-1 for rotating number------------------------
function rotateLeft(argument, number) {
    for (let i = 0; i < number; i++) {
        let first = argument.shift();
        argument.push(first);
    }
    return argument;
};



// example of function 01 
console.log(rotateLeft([1, 2, 3, 4, 5], 2));
console.log(rotateLeft([1, 2, 3, 4, 5, 6], 4));
console.log(rotateLeft([7, 8, 9, 10, 11, 12], 5));
// output of function 01

// [ 4, 5, 1, 2, 3 ]
// [ 3, 4, 5, 6, 1, 2 ]
// [ 8, 9, 10, 11, 12, 7 ]




//function no-1 for rotating number
function rotateLeft(argument, number) {
    for (let i = 0; i < number; i++) {
        let last = argument.pop();
        argument.unshift(last);
    }
    return argument;
};


// example function 02 ---------------------------------------
console.log(rotateLeft([1, 2, 3, 4, 5], 2));
console.log(rotateLeft([1, 2, 3, 4, 5, 6], 4));
console.log(rotateLeft([7, 8, 9, 10, 11, 12], 5));
// output of function 02

// [ 4, 5, 1, 2, 3 ]
// [ 3, 4, 5, 6, 1, 2 ]
// [ 8, 9, 10, 11, 12, 7 ]





//Description:-------------------------------------------------
// This function received two parameters
// ✅ An array of integer number
// ✅ Number of array index that needs to be shifted from last to first
// ✅ use shift() and push() for example
// ✅ use unshift() and pop() for example
// ✅ This example first 2/4/5 indexed number of this array was replace from their original index number
// ✅ Both functions are generating the same result.