/*

# CHALLENGE

What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater?

-------------------------------------------------------------------------

# ANSWER

Denotation:
- N: the BigInt we are looking for.
- A: digits of N without the last one.
- L: lenght of N.
- R: the result of both operations performed on 'N'.

Constraints:
- Both 'N' and 'R' must have the same lenght, because the transformation is just an rearrangement.

Analysis:
- Any number that maintains its length when multiplied by 9 starts with 1s or 0s, such as 1, 10, 11, 100...
- The product of 9 and any number whose first two digits are 1 or 0 always starts with 9 ('R').
- Since 'R' starts with 9, 'N' must end with 9.

N = 10A + 9
R = 9N
R = (9 * 10^(L-1)) + A

Substitution:
9(10A + 9) = (9 * 10^(L-1)) + A
90A + 81 = (9 * 10^(L-1)) + A
89A = (9 * 10^(L-1)) - 81
89A = 9 * (10^(L-1) - 9)
A = (9 * (10^(L-1) - 9))/89

What next?
- Find the first value for 'L' such that 'A' is a positive integer.

*/

const t0 = performance.now();

let L = 1n;
const numerator = (L) => 9n * (10n ** (BigInt(L) - 1n) - 9n);
const isPositiveInteger = (L) => numerator(L) % 89n === 0n;
while (!isPositiveInteger(L)) L++;
const A = (9n * (10n**(L-1n) - 9n))/89n;
const N = (10n * A) + 9n;
const R1 = 9n * N;
const R2 = (9n * 10n**(L-1n)) + A;
console.log({ L, N, R1, R2, isEqual: R1 === R2 });

const t1 = performance.now();
console.log(`Time: ${t1-t0}`);
