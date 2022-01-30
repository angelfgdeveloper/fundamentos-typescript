export {};

enum PictureOrientation {
  Landscape,
  Portrait,      
  Square,        
  Panorama       
}

class Picture {
  // Propiedades
  public id: number;
  public title: string;
  public orientation: PictureOrientation;

  public constructor(id: number, title: string, orientation: PictureOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
  }

}


class Album {
  // Propiedades
  public id: number;
  public title: string;
  // pictures: Picture[] = [];
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }

}


const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PictureOrientation.Square);
// const picture2: Picture = new Picture(2, 'Platzi session 2', PictureOrientation.Landscape);
album.addPicture(picture);
album.addPicture(new Picture(2, 'Platzi session 2', PictureOrientation.Landscape));
album.addPicture(new Picture(3, 'Meetups', PictureOrientation.Portrait));
album.addPicture(new Picture(4, 'Live', PictureOrientation.Panorama));

console.log('Album:', album);



// Accediendo a los mienbros publicos
picture.id = 100; // public
picture.title = 'Another Title'; //public
album.title = 'Personal Activities';
console.log('Album:', album);
