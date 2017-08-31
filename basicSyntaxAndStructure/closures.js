// //Functions have access to any public variable in the outer scope
// function nameFunction(name: string): void {
//   var n: string = name;
//   function printName() {
//     console.log(n);
//   }
//   printName()
// }
// nameFunction("Colton");
// //*****
// //Inner function maintains access to the outer values even AFTER the values are returned!
// function nameFunction(name: string){
//   var n: string = name;
//   return function () {
//     console.log(n);
//   }
// }
// var nameAgain = nameFunction("Paige");
// nameAgain();
// //****
function lineUp1() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineUp1();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
//# sourceMappingURL=closures.js.map