//passing functions as arguments(first class functions)

let years = [2009, 1974, 1988, 2001, 1924];

function arrayCalc (arr, fn) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push (fn (arr[i]));
  }
  return arrRes;
}

// callback function
function calculateAge (el) {
  return 2020 - el;
}

function isFullAge (el) {
  return el >= 18;
}

function maxHeartRate (el) {
  if (el >= 18 && el <= 81) {
    return Math.round (206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

let ages = arrayCalc (years, calculateAge);
let fullAges = arrayCalc (ages, isFullAge);
let rates = arrayCalc (ages, maxHeartRate);

console.log (ages);
console.log (fullAges);
console.log (rates);
