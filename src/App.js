import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import NoteProvider from './store/NoteProvider';
import './base.css';

const App = () => {
  return (
    <NoteProvider>
      <div className="App">
        <Header />
        <MainBody />
      </div>
    </NoteProvider>
  );
};

export default App;
