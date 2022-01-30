export = {};

enum PictureOrientation {
  Landscape,
  Portrait,      
  Square,        
  Panorama       
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  // copia de los atributos de Entity
  description: string;
}

interface Picture extends Entity {
  orientation: PictureOrientation;
}

const album: Album = {
  id: 1,
  title: 'Meetups',
  description: 'Community events around the world'
};

const picture: Picture = {
  id: 2,
  title: 'Family',
  orientation: PictureOrientation.Landscape
};


let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('Album:', album);
console.log('Picture:', picture);
console.log('New Picture:', newPicture);