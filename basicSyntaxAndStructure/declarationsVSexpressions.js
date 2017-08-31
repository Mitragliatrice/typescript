console.log(fullName2('Colton', 'Mathews'));
// console.log(otherFullName('Colton', 'Mathews'));
// console.log(thirdFullName('Colton', 'Mathews'));
// Function Declaration, 'hoisting'
function fullName2(first, last) {
    return first + " " + last;
}
//Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
//# sourceMappingURL=declarationsVSexpressions.js.map