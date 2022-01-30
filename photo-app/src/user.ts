import { Album } from './album';

export class User {
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

	removeAlbum(album: Album): Album | undefined {
		// Buscar Album
		const index = this._album.findIndex(a => a.id === album.id);
		let deletedAlbum;
		if (index >= 0) {
			deletedAlbum = this._album[index];
			this._album.splice(index, 1);
		}

		return deletedAlbum;
	}
}