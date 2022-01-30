export = {};

// <type> -> Angle Bracket syntax
let username: any;
username = "angelfg";

// Tener una cadena, TS confia en mi!
let message: string =
  (<string>username).length > 5
    ? `Bienvenido ${username}`
    : `El nombre de usuario es muy corto`;

console.log("Message:", message);

let usernameWithId: any = "angelfg 1.0";
// Como obtener el username?
username = (<string>usernameWithId).substring(0, 7);
console.log("Username only:", username);

// Sintaxis "as"
message =
  (username as string).length > 5
    ? `Bienvenido ${username}`
    : `El nombre de usuario es muy corto`;

let helloUser: any;
helloUser = 'Hola angelfg';
helloUser = (helloUser as string).substring(5);
console.log('Username:', helloUser);
