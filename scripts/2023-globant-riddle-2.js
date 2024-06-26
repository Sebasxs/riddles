/*

# CHALLENGE

What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater?

-------------------------------------------------------------------------

# ANSWER

Denotation:
- NUMBER: the BigInt we are looking for.
- RESULT: the result of both operations performed on 'NUMBER'.

Constraints:
- Both 'NUMBER' and 'RESULT' must have the same lenght, because the transformation is just an rearrangement.

Analysis:
- Any number that maintains its length when multiplied by 9 starts with 1s or 0s, such as 1, 10, 11, 100...
- The product of 9 and any number whose first two digits are 1 or 0 always starts with 9 ('RESULT').
- Since 'RESULT' starts with 9, 'NUMBER' must end with 9.
- Since 'NUMBER' ends with 9, 'NUMBER' must start with '10' (zero is forced as second digit in order to maintain the result's length)
- The product of 9 and any number that starts with 10 and ends with 9 (109, 1009...) always ends with 1 (981, 9081...),
  therefore the last two digits of 'NUMBER' are 19.
- Now 'NUMBER' has the form 10...19 and 'RESULT' 910...1
- Repeating the product of 9, we found new digits on every iteration*/

const t0 = performance.now();

const firstDigits = '10';
const farRightDigit = '9';
let bodyDigits = '';
let digitCounter = 1;
let notFound = true;

while (notFound) {
   const number = BigInt(firstDigits + bodyDigits + farRightDigit);
   const multiplied = number * 9n;
   const expected = BigInt(farRightDigit + firstDigits + bodyDigits);
   bodyDigits = multiplied.toString().slice(-digitCounter);
   notFound = multiplied !== expected;
   digitCounter++;
   console.log({ multiplied, expected, number });
};

const t1 = performance.now();
console.log(`Time: ${t1-t0}`);
