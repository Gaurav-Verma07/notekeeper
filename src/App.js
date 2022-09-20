import NoteProvider from './store/NoteProvider';
import './base.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from './components/Modal/Loading/Loading';

const NotePage = React.lazy(() => {
  return import('./pages/NotesDetail');
});

const App = () => {
  return (
    <NoteProvider>
      <Suspense
        fallback={
          <div className="centered">
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/2" />} />
          <Route path="/:pageID" element={<NotePage />} />
        </Routes>
      </Suspense>
    </NoteProvider>
  );
};

export default App;
