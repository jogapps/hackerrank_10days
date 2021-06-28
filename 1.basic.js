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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let radius = readLine();
    //console.log(radius);
    // Print the area of the circle:
    console.log(PI * radius * radius);
    // Print the perimeter of the circle:
    console.log(2 * PI * radius);

}

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) grade = "A"
    if (score > 20 && score <= 25) grade = "B"
    if (score > 15 && score <= 20) grade = "C"
    if (score > 10 && score <= 15) grade = "D"
    if (score > 5 && score <= 10) grade = "E"
    if (score > 0 && score <= 5) grade = "F"

    return grade;
}


function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            letter = "B";
            break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
            letter = "C";
            break;
        default:
            letter = "D";
    }

    return letter;
}

function getSecondLargest(nums) {
    // remove all repetition from the array
    // sort by descending order
    // get second element
    let newNums = [];

    for (let i = 0; i < nums.length; i++) {
        if (!newNums.includes(nums[i])) {
            newNums.push(nums[i]);
        }
    }
    newNums.sort((a, b) => b - a);
    return newNums[1];
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    for(let i = 0; i < objects.length; i++) {
        if(objects[i].x == objects[i].y) {
            count++;
        }
    }
    return count;
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {

    //     Rectangle.prototype.area = function() {
    //     console.log(this.a * this.b);
    // }
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
    // This isn't necessary, but it prevents new properties from being added
    // It also prevents the properties we've already set from being modified
    Object.freeze(this);

}


/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    
    perimeter() {
        let sum = 0;
        for(let i = 0; i < this.sides.length; i++) {
            sum += this.sides[i]; 
        }
        return sum;
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());