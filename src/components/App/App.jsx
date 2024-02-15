import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMoovies from "../SavedMoovies/SavedMoovies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header main={true} />
              <Main />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <Header main={false} />
              <Movies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <>
              <Header main={false} />
              <SavedMoovies />
              <Footer />
            </>
          }

        ></Route>
      </Routes>
    </div>
  );
}

export default App;
