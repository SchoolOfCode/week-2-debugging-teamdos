function getGradeFromPoints(points) {
  if ((points) >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

const grade = getGradeFromPoints(90);
console.log(grade + " should be A");

// 1. Check the syntax/structure of code (no typos)
// 2. Test the function and check output in devtools
// 3. Follow the code per line and articulate what is happening explicitly to understand how the function works
//     - eg. check data types, return statements, if statement logic