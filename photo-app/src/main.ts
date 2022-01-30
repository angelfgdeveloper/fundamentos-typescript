// import { User, Album, Picture, PhotoOrientation } from './photo-app';
import { User } from './user';
import { Album } from './album';
import { Picture } from './picture';
import { PhotoOrientation } from './photo-orientation';

const user = new User(1, 'angelfg', 'Angel', true);
const album = new Album(10, 'Platzi Album');
const album1 = new Album(20, 'Platzi Album 2.0');
const picture = new Picture(1, 'Photo Course', '2022-12-24', PhotoOrientation.Landscape);
const picture1 = new Picture(2, 'Only photo', '2022-11-17', PhotoOrientation.Portrait);

// Creamos relaciones entre los objetos
user.addAlbum(album);
user.addAlbum(album1);
album.addPicture(picture);
album.addPicture(picture1);

console.log('user', user);

for (const album of user.album) {
  for (const picture of album.pictures) {
    console.log('Pictures:', picture);
  }
}

// Borramos Album
user.removeAlbum(album);
console.log('user', user);

// compilador 
// tsc --project myFolder --watch
// tsc --project photo-app --watch
// node photo-app/dist/main.ts

