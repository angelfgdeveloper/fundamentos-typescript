console.log('Hola Luisito ;D');

// Tipo: Number -----------
// Explicito
let phone: number;
phone = 1;
phone = 6188143030;
// phone = 'Hola' - Error

// Inferido
let phoneNumber = 6188143030;
phoneNumber = 132;
// phoneNumber = true; - Error por tipo de dato

let hex: number = 0xff00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean --------------
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1; - Error

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; - Error

// Tipo: String ----------------
let username: string = 'angelfgdev';
username = "Luis";
// username = true; - Error

// Template String
// Uso de back-tick ``
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username + ' Angel'}
  phone: ${phone}
  isPro: ${isPro}
`;

console.log('userInfo', userInfo);

// Uso 1era consola: ts --watch
// En seguida 2da terminal: node dist/main.js
// Vemos el clg;