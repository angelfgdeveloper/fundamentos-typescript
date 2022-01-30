// Tipo explicito
let idUser: any;
idUser = 1; // Number
idUser = '1'; // String
console.log('idUser', idUser);

// Tipo Inferido
let otherId;
otherId = 1; // Number
otherId = '1'; // String
// otherId = true;
console.log('otherId', otherId);

let surprise: any = 'Hola Typescript';

const res = surprise.substring(5);
console.log('res', res);
