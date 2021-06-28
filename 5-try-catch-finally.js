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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
       //Try to reverse string  using the split, reverse, and join methods. 
        let newSArray = s.split("");
        let rearrangedS = newSArray.reverse();
        // for(let i = newSArray.length - 1; i >= 0; i--) {
        //     rearrangedS.push(newSArray[i]);
        // }
        
        let newS = rearrangedS.join("");
        console.log(newS);
    } 
    catch(e) {
         console.log(e.message);
         console.log(s);
    }
}

