export = {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string,
  date: string,
  orientation: PhotoOrientation
}

// Funcion para mostrar una Fotografía
function showPicture(picture: Picture) {
  console.log(`[title: ${picture.title}, 
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
}

let myPic = {
  title: 'Test title',
  date: '2022-12-26',
  orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
  title: 'Test title 2',
  date: '2022-02-26',
  orientation: PhotoOrientation.Portrait,
  // extra: 'test' - Error
});


interface PictureConfig {
  title?: string, // ? atributos opcionales
  date?: string,
  orientation?: PhotoOrientation  
}

function generatePicture(config: PictureConfig) {
  const pic = { title: 'Default', date: '2023-05-19' };
  if (config.title) {
    pic.title = config.title;
  }

  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log('Picture:', picture);
picture = generatePicture({ title: 'Travel Pic'} );
console.log('Picture:', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2024-12-31'} );
console.log('Picture:', picture);


// Interfaz: Usuario
interface User {
  readonly id: number; // Solo lectura
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: 'angelfg', isPro: true };
console.log('User:', user);
user.username = 'luisfg';
// user.id = 20; - Error
console.log('User:', user);
