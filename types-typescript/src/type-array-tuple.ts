// Corchetes []

// Tipo explicito
let users: string[];
users = ['angelfg', 'devwa', 'luisfg'];
// users = [1, true, 'test']; - Error por tipos

// Tipo inferidos
let otherUsers = ['angelfg', 'devwa', 'luisfg'];
// otherUsers = [1, true, 'test']; - Error por tipos

// Array<Type>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];


// Accediendo a valores en un Array
console.log('First user:', users[0]);
console.log('First title:', pictureTitles[0]);

// Propiedades en Array
console.log('Users length:', users.length);

// Uso de funciones en Arrays
users.push('aplatziUser'); // Agregar
users.sort(); // Acomodar alfabeticamente
console.log('Users:', users);