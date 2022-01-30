export {};

// [1, 'user]
let user: [number, string];
user = [1, 'angelfg'];

console.log('User:', user);
console.log('Username:', user[1]);
console.log('Username length:', user[1].length);
console.log('Id:', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [1, 'angelfg', true];
console.log('UserInfo:', userInfo);

// Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'angelfg']);   // 0
array.push([2, 'luisgf']);    // 1
array.push([3, 'fgdevelop']); // 2

console.log('Array:', array);

// Uso de funciones Array
// fgdevelop -> fgdevelop001

array[2][1] = array[2][1].concat('001'); // Asignando -> fgdevelop001
console.log('Array:', array);
