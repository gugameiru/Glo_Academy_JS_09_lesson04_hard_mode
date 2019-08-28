'use strict';

let myFunction = function(arg1) {
    if (typeof arg1 === 'string' || arg1 instanceof String) {
        let str = arg1.trim();
        if (str.length > 30) {
            return str.substring(0, 30) + '...';
        } else {
            return str;
        }
    } else {
        return ('В функцию передана не строка');
    } 
};

// Test passed
console.log(myFunction('                 У попа была собака, он её любил, Она съела кусок мяса, он её убил, В землю закопал, Надпись написал                 '));

// Test 2 passed
console.log(myFunction('                 У попа была собака                 '));

// Test failed
console.log(myFunction(555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555));