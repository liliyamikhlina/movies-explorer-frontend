import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main'
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies'

function App() {
  return (
    <div className="App">
      {/* <Header main={true}/>
      <Main />
      <Footer /> */}

      <Movies />
    </div>
  );
}

export default App;
