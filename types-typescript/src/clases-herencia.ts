export {};

enum PictureOrientation {
  Landscape,
  Portrait,      
  Square,        
  Panorama       
}

// Superclase
abstract class Item {
  protected readonly _id: number; // Solo lectura
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  // set id(id: number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

}

// Son get y set
class Picture extends Item {

  public static pictureOrientation = PictureOrientation;

  // Propiedades
  private _orientation: PictureOrientation;

  public constructor(id: number, title: string, orientation: PictureOrientation) {
    super(id, title); // Contructor de super clase
    this._orientation = orientation;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PictureOrientation) {
    this._orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
  }

}

class Album extends Item {
  // Propiedades
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title); // Contructor de super clase
    this._pictures = [];
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
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


console.log('picture.id:', picture.id); // get id()

// picture.id = 100; // private, set id(100)
picture.title = 'Another Title'; // private
album.title = 'Personal Activities'; // private
console.log('Album:', album);


// const item = new Item(5, 'Test title'); - Error es abstract
// console.log('Item:', item);

// Probarel miembro estatico
console.log('PictureOrientation:', Picture.pictureOrientation.Landscape);