// closures
function retirement (retirementAge) {
  let a = ' years left until retirement';
  return function (yearOfBirth) {
    let age = 2020 - yearOfBirth;
    console.log (`${retirementAge - age} ${a}`);
  };
}

let retirementKE = retirement (55);
retirementKE (1981);

retirement (55) (1981);
