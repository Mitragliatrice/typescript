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
function linupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

linupCard('Astros', 'Colton Mathews', 'Sam Holst', 'Brayden Green')