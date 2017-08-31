
console.log(fullName2('Colton', 'Mathews'));
// console.log(otherFullName('Colton', 'Mathews'));
// console.log(thirdFullName('Colton', 'Mathews'));

// Function Declaration, 'hoisting'
function fullName2(first: string, last: string): string {
  return first + " " + last;
}

//Function expression
var otherFullName: (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
  return first + " " + last;
}

var thirdFullName: (first: string, last: string) => string = function (first: string, last: string) {
  return first + " " + last;
}
