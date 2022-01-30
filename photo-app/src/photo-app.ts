export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama
}

class Item {
	constructor(public readonly id: number, protected title: string) {}
}

class User {
	private _album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this._album = [];
	}

  get album() {
    return this._album;
  }

	addAlbum(album: Album) {
		this.album.push(album);
	}
}

class Album extends Item {
	private _pictures: Picture[];

	public constructor(id: number, title: string) {
		super(id, title);
		this._pictures = [];
	}


  get pictures() {
    return this._pictures;
  }

	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

class Picture extends Item {
	public constructor(id: number, title: string, private _date: string, private _orientation: PhotoOrientation) {
		super(id, title);
	}
	public toString() {
		return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
	}
}