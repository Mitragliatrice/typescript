
var fullName = (first, last) => {
  return first + " " + last;
}

console.log(fullName('Colton', 'Mathews'));

// Colton Mathews

var gradeGenerator2 = (grade: number): string => {
  if (grade < 60) {
    return 'F';
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(gradeGenerator2(45));
console.log(gradeGenerator2(100));
console.log(gradeGenerator2(80));

// F
// A
// B