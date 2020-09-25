/** KATA 01 ⮕
 ***
 *** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
 ***
 **/

console.log(
  "%cKATA 1 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

let counter = 1;
while (counter <= 20) {
  console.log(counter);
  counter = counter + 1;
}

/** KATA 02 ⮕
 ***
 *** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
 ***
 ***/

console.log(
  "%cKATA 02 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
); // These console.logs are just to help make the console log better organized and more readable

/* Write your KATA 02 code in place of THIS comment. */

let even = 2;
while (even <= 20) {
  console.log(even);
  even += 2;
}

/** KATA 03 ⮕
 ***
 *** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
 ***
 ***/

console.log(
  "%cKATA 03 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 03 code in place of THIS comment. */

let odd = 1;
while (odd <= 20) {
  console.log(odd);
  odd += 2;
}

/** KATA 04 ⮕
 ***
 *** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
 ***
 ***/

console.log(
  "%cKATA 04 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 04 code in place of THIS comment. */

let mult5 = 5;
while (mult5 <= 100) {
  console.log(mult5);
  mult5 += 5;
}

/** KATA 05 ⮕
 ***
 *** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
 ***
 ***/

console.log(
  "%cKATA 05 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 05 code in place of THIS comment. */

let perfectSquare = 1;
while (perfectSquare <= 100) {
  let psResult = Math.sqrt(perfectSquare);
  if (psResult % 1 === 0) {
    console.log(psResult ** 2);
  }
  perfectSquare += 1;
}

/** KATA 06 ⮕
 ***
 *** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
 ***
 ***/

console.log(
  "%cKATA 06 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 06 code in place of THIS comment. */

let countBackward = 20;
while (countBackward >= 1) {
  console.log(countBackward);
  countBackward -= 1;
}

/** KATA 07 ⮕
 ***
 *** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
 ***
 ***/

console.log(
  "%cKATA 07 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 07 code in place of THIS comment. */

let countEvenBackward = 20;
while (countEvenBackward >= 2) {
  console.log(countEvenBackward);
  countEvenBackward -= 2;
}

/** KATA 08 ⮕
 ***
 *** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
 ***
 ***/

console.log(
  "%cKATA 08 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 08 code in place of THIS comment. */

let countOddBackward = 19;
while (countOddBackward >= 1) {
  console.log(countOddBackward);
  countOddBackward -= 2;
}

/** KATA 09 ⮕
 ***
 *** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
 ***
 ***/

console.log(
  "%cKATA 09 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 09 code in place of THIS comment. */

let countMult5Backward = 100;
while (countMult5Backward >= 5) {
  console.log(countMult5Backward);
  countMult5Backward -= 5;
}

/** KATA 10 ⮕
 ***
 *** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
 ***
 ***/

console.log(
  "%cKATA 10 RESULTS:",
  "background: darkblue; color: white; font-weight: bold;"
);

/* Write your KATA 10 code in place of THIS comment. */

let perfectSquareBackward = 100;
while (perfectSquareBackward >= 1) {
  let psbResult = Math.sqrt(perfectSquareBackward);
  if (psbResult % 1 === 0) {
    console.log(psbResult ** 2);
  }
  perfectSquareBackward -= 1;
}
