// // Without Arguments
// var names2: string[] = ["Colton", "Paige", "Lillia"];
// var counter2: number = 0;
// (function () {
//   for (let name in names2) {
//     counter2++;
//   }
// })();
// console.log(counter2);
// var fullName4 : (first: string, last: string) => string;
// fullName4 = function(first : string, last : string) {
//   return first + " " + last;
// }
// console.log(fullName4("Colton", "Mathews"));
// Immediately Invoke version
(function (first, last) {
    console.log(first + " " + last);
})("Colton", "Mathews");
//# sourceMappingURL=immediatelyInvokedFunctions.js.map