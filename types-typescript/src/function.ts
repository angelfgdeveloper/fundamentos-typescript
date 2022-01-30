export {};
// Crear una fotografía
// function createPicture(title, date, size) {
//   // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usamos TS, definimos tipos para parametros
// function createPicutre(title: string, date: string, size: SquareSize) {
//   // Se crea la fotografía
//   console.log('Create picture using:', title, date, size);
// }

// createPicutre('My Birthday', '2022-12-10', '500x500');
// createPicutre('México trip', '2022-05-18');


// Parametros opcionales
function createPicutre(title?: string, date?: string, size: SquareSize = '100x100') {
  // Se crea la fotografía
  console.log('Create picture using:', title, date, size);
}

createPicutre('My Birthday', '2022-12-10', '500x500');
createPicutre('México trip', '2022-05-18');
createPicutre('México trip');
createPicutre();

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
  return { title, date, size };
}

const picture = createPic('Platzi session', '2022-11-14', '100x100');
console.log('Picture:', picture);


// Tipo de retorno con Typescript

function handleError(code: number, message: string): never | string {
  // Procesamiento del código, mensaje
  if( message === 'error' ) {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has occurred';
  }
}

try {
  let result = handleError(200, 'OK'); // string
  console.log('Result:', result);
  
  result = handleError(404, 'error'); // never
  console.log('Result:', result);
  
} catch (error) {
  // console.log(error);
}
