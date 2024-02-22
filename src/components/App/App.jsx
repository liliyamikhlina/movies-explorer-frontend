import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMoovies from "../SavedMoovies/SavedMoovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header main={true}
              isLoggedIn={true} />
              <Main />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <Header main={false}
              isLoggedIn={true} />
              <Movies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <>
              <Header main={false}
              isLoggedIn={true} />
              <SavedMoovies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <>
              <Header main={false}
              isLoggedIn={true} />
              <Profile name={"Лилия"} email={"pochta@yandex.ru"} />
            </>
          }
        ></Route>

        <Route path="/signin" element={<Login />}></Route>

        <Route path="/signup" element={<Register />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
