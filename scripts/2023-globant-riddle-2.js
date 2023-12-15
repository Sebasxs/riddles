/*

CHALLENGE

What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater?

-------------------------------------------------------------------------

ANALYSIS

1. Both 'NUMBER' and 'RESULT' must have the same lenght.
2. Every number that preserves its length when multiplied by '9' starts with '1'; such as 1, 10, 11, 100...
3. The 'RESULT' can only start with '9', so this must be the last digit of the 'NUMBER'.

_________________________________________________________________________

ALGORITHM: */

let body = '';
let digits = '';
let found = false;
let digitCounter = 1;
const t0 = performance.now();

while (!found) {
   digits = body + '9';
   const new_number = BigInt(digits);
   const multiplied = new_number * 9n;
   const n_expected = BigInt('9' + body);
   found = multiplied === n_expected;
   body = multiplied.toString().slice(-digitCounter);
   console.log({ new_number, multiplied, n_expected });
   digitCounter++;
};

const t1 = performance.now();
console.log({
   number: BigInt(digits),
   result: BigInt(digits) * 9n,
   time: t1 - t0
});