// Tipo: object
let user: object;
user = {}; // object

user = {
  id: 1,
  username: 'angelfg',
  fistName: 'Angel',
  isPro: true
};

console.log('User:', user);

// Object vs object(Clase JS vs tipo TS)
const myObject = {
  id: 1,
  username: 'angelfg',
  fistName: 'Angel',
  isPro: true
};

const isInstance = myObject instanceof Object; // Clase Object de JS

console.log('isInstance:', isInstance);
console.log('Username:', myObject.username);