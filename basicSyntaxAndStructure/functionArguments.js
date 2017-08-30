// // Optional arguments denoted with a '?'
// // Default arguments are denoted by setting the argument with '='
// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//     console.log(state);
// }
// printAddress('123 Any St', 'Suite 2b', 'UT')
// printAddress('123 Any St', 'Suite 2b')
// printAddress('123 Any St')
// The "rest" of the items is denoted using '...' before the argument.
function linupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player_1 = players_1[_a];
        console.log(player_1);
    }
}
linupCard('Astros', 'Colton Mathews', 'Sam Holst', 'Brayden Green');
//# sourceMappingURL=functionArguments.js.map