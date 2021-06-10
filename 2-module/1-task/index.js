function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let salari = typeof salaries[key] === 'number' && Number.isFinite(salaries[key]);

    if (salari) {
      sum += salaries[key];
    }
  }

  return sum;
}