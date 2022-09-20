import NoteProvider from './store/NoteProvider';
import './base.css';
// import { Navigate, Route, Routes } from 'react-router-dom';
// import React, { Suspense } from 'react';
// import Loading from './components/Modal/Loading/Loading';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';

// const NotePage = React.lazy(() => {
//   return import('./pages/NotesDetail');
// });

const App = () => {
  return (
    // <NoteProvider>
    //   <Suspense
    //     fallback={
    //       <div className="centered">
    //         <Loading />
    //       </div>
    //     }
    //   >
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/2" />} />
    //       <Route path="/:pageID" element={<NotePage />} />
    //     </Routes>
    //   </Suspense>
    // </NoteProvider>
    <NoteProvider>
      <div className="App">
        <Header />
        <MainBody />
      </div>
    </NoteProvider>
  );
};

export default App;
