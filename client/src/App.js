import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import Page from './Components/Layers/Page';
import Webcam from './Components/Webcam/Webcam';
import './css/App.css';
import './css/App_mobile.css';
import ConfirmEmail from './Pages/ConfirmEmail';
import Dzhilsu from './Pages/Dzhilsu/Dzhilsu';
import DzhilsuResults from './Pages/Dzhilsu/DzhilsuResults';
import DzhilsuResultsAthlete from './Pages/Dzhilsu/DzhilsuResultsAthlete';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import NewPassword from './Pages/NewPassword';
import NewsFull from './Pages/NewsFull';
import Page404 from './Pages/Page404';
import Trail from './Pages/Trail';
import Trails from './Pages/Trails/Trails';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import Album from './Pages/Album';
import Albums from './Pages/Albums';

import { getAuth } from './redux/features/authSlice';
import { AdminRoute } from './Route/AdminRoute';
import { checkAuth } from './api/auth-check';
import { sendMetrika } from './metrika/yandex';

function App() {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.checkAuth.value.user);

  // const isAdmin = ['admin'].includes(userAuth.role);
  const isModerator = ['admin', 'moderator'].includes(userAuth.role);

  useEffect(() => {
    checkAuth()
      .then((response) => {
        if (!response) return;
        dispatch(getAuth({ status: true, user: response.data.user }));
        localStorage.setItem('accessToken', response.data.accessToken);
      })
      .catch((error) => {
        dispatch(getAuth({ status: false, user: {} }));
        localStorage.setItem('accessToken', '');
      });
  }, [dispatch]);

  const location = useLocation();
  sendMetrika('hit', location.pathname);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="news/:newsId" element={<NewsFull />} />
            <Route path="webcam" element={<Webcam />} />
            <Route path="trails" element={<Trails />} />
            <Route path="trails/:trailId" element={<Trail />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery/:galleryId/albums/" element={<Albums />} />
            <Route path="gallery/:galleryId/albums/:albumId" element={<Album />} />
            <Route path="dzhilsu" element={<Dzhilsu />} />
            <Route path="dzhilsu/results/:eventId" element={<DzhilsuResults />} />
            <Route
              path="dzhilsu/results/athlete/:athlete"
              element={<DzhilsuResultsAthlete />}
            />
            <Route path="confirm-email/:token" element={<ConfirmEmail />} />
            <Route path="new-password/:token" element={<NewPassword />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<ProfileEdit />} />
            {isModerator ? AdminRoute() : ''}
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
