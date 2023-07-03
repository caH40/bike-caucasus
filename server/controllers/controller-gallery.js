import {
	getGalleriesService,
	postAlbumService,
	postGalleryService,
	getAlbumsService,
	postPhotosService,
	getPhotosService,
	deleteGalleryService,
	deletePhotoService,
	deleteAlbumService,
} from '../service/gallery.js';

export async function getGalleries(req, res) {
	try {
		const galleries = await getGalleriesService();
		res.status(200).json(galleries);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function postGallery(req, res) {
	try {
		const { form } = req.body;
		const { userId } = req.params;
		const gallerySaved = await postGalleryService(form, userId);
		res.status(200).json(gallerySaved);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function getAlbums(req, res) {
	try {
		const { galleryId } = req.params;
		const galleries = await getAlbumsService(galleryId);
		res.status(200).json(galleries);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function postAlbum(req, res) {
	try {
		const { form } = req.body;
		const { userId } = req.params;
		const albumSaved = await postAlbumService(form, userId);
		res.status(200).json(albumSaved);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function postPhotos(req, res) {
	try {
		const { form } = req.body;
		const { userId } = req.params;
		const photosSaved = await postPhotosService(form, userId);
		res.status(200).json(photosSaved);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function getPhotos(req, res) {
	try {
		const { albumId } = req.params;
		const photos = await getPhotosService(albumId);
		res.status(200).json(photos);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function deleteGallery(req, res) {
	try {
		const { galleryId } = req.body;
		const gallery = await deleteGalleryService(galleryId);
		res.status(200).json(gallery);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function deleteAlbum(req, res) {
	try {
		const { albumId } = req.body;
		const photo = await deleteAlbumService(albumId);
		res.status(200).json(photo);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
export async function deletePhoto(req, res) {
	try {
		const { photoId } = req.body;
		const photo = await deletePhotoService(photoId);
		res.status(200).json(photo);
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.json({ message: typeof error !== 'string' ? 'Непредвиденная ошибка на сервере' : error });
	}
}
