const isLoggedIn = true;
const isAdmin = false;
const accessLevel = isLoggedIn && isAdmin ? "Admin" : isLoggedIn ? "User" : "Guest";
console.log(accessLevel); // Output: User

