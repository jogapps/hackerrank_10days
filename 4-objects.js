'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    Rectangle.prototype.area = function() {
    console.log(this.a * this.b);
}
    this.length = a;
    this.width =  b;
    this.perimeter = 2 * (a + b);
   this.area = a * b; 
    // This isn't necessary, but it prevents new properties from being added
    // It also prevents the properties we've already set from being modified
    Object.freeze(this);
    
}

