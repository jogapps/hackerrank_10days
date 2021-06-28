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
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    
    let s1 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - (16 * area))) / 4;
    let s2 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - (16 * area))) / 4;
    let values = [s1, s2];
    return values.sort();
    // for(let value in values) {
    //     console.log(value);
    // }
    
    console.log(literals);
    console.log(expressions);
}

