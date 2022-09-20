import { Fragment, Suspense,  } from 'react';
import { useParams, Outlet,  useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import MainBody from '../components/MainBody/MainBody';
import Loading from '../components/Modal/Loading/Loading';

const NotesDetail = () => {
  const location = useLocation();
  const { pageID } = useParams();

  console.log(pageID);

  console.log('from load comments= ', location.pathname);
  return (
    <Suspense  fallback={
        <div className="centered">
          <Loading   />
        </div>
      }>
      <Header />
      <MainBody />
      <Outlet />
    </Suspense>
  );
};
export default NotesDetail;
