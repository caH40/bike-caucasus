import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Admin = lazy(() => import('../Pages/Admin/Admin'));
const AdminBG = lazy(() => import('../Pages/Admin/AdminBG'));
const AlbumAddPhotos = lazy(() => import('../Pages/Admin/AlbumAddPhotos'));
const AlbumCreate = lazy(() => import('../Pages/Admin/AlbumCreate'));
const AlbumsEdit = lazy(() => import('../Pages/Admin/AlbumsEdit'));
const EventEdit = lazy(() => import('../Pages/Admin/EventEdit'));
const EventResultAdd = lazy(() => import('../Pages/Admin/EventResultAdd'));
const EventResultEdit = lazy(() => import('../Pages/Admin/EventResultEdit'));
const EventResultsEdit = lazy(() => import('../Pages/Admin/EventResultsEdit'));
const Events = lazy(() => import('../Pages/Admin/Events'));
const EventsEdit = lazy(() => import('../Pages/Admin/EventsEdit'));
const GalleryCreate = lazy(() => import('../Pages/Admin/GalleryCreate'));
const GalleryEdit = lazy(() => import('../Pages/Admin/GalleryEdit'));
const NewsAll = lazy(() => import('../Pages/Admin/NewsAll'));
const NewsCreate = lazy(() => import('../Pages/Admin/NewsCreate'));
const NewsEdit = lazy(() => import('../Pages/Admin/NewsEdit'));
const PhotosDelete = lazy(() => import('../Pages/Admin/PhotosDelete/PhotosDelete'));
const TrailAll = lazy(() => import('../Pages/Admin/TrailAll'));
const TrailCreate = lazy(() => import('../Pages/Admin/TrailCreate'));
const TrailEdit = lazy(() => import('../Pages/Admin/TrailEdit'));
const Users = lazy(() => import('../Pages/Admin/Users'));
const UsersEdit = lazy(() => import('../Pages/Admin/UsersEdit'));

export const AdminRoute = () => {
	return (
		<Route path="/admin" element={<Admin />}>
			<Route index element={<AdminBG />} />
			<Route path="create-news" element={<NewsCreate />} />
			<Route path="edit-news" element={<NewsAll />} />
			<Route path="edit-news/:newsId" element={<NewsEdit />} />
			<Route path="create-trail" element={<TrailCreate />} />
			<Route path="edit-trail" element={<TrailAll />} />
			<Route path="edit-trail/:trailId" element={<TrailEdit />} />
			<Route path="users" element={<Users />} />
			<Route path="users/:userId" element={<UsersEdit />} />
			<Route path="events/load" element={<Events />} />
			<Route path="events/edit" element={<EventsEdit />} />
			<Route path="events/edit/:eventId" element={<EventEdit />} />
			<Route path="events/edit/results/:eventId" element={<EventResultsEdit />} />
			<Route path="events/edit/result/:resultId" element={<EventResultEdit />} />
			<Route path="events/edit/result/add/:eventId" element={<EventResultAdd />} />
			<Route path="gallery/create" element={<GalleryCreate />} />
			<Route path="gallery/edit" element={<GalleryEdit />} />
			<Route path="gallery/edit/albums/:galleryId/add" element={<AlbumCreate />} />
			<Route path="gallery/edit/albums/:galleryId" element={<AlbumsEdit />} />
			<Route
				path="gallery/edit/albums/:galleryId/photos-delete/:albumId"
				element={<PhotosDelete />}
			/>
			<Route
				path="gallery/edit/albums/:galleryId/photos-add/:albumId"
				element={<AlbumAddPhotos />}
			/>
		</Route>
	);
};
