function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; 
}

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
};

alert( sumSalaries(salaries) ); 