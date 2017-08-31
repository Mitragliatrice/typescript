interface User {
  email: string;
  firstName?: string;
  lastName?: string;
}

function profile(user: User): string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser1 = {
  email: 'yest@tyes.com',
  firstName: 'Colton',
  lastName: 'Mathews'
};

console.log(profile(realUser1));