import './base.css';
import backdrop from './backdrop.png';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainBody />
      {/* <img src={backdrop} className="App-logo" alt="logo" /> */}
    </div>
  );
};

export default App;
