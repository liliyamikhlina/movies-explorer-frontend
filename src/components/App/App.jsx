import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMoovies from "../SavedMoovies/SavedMoovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const handleUpdateUser = (userInfo) => {
    mainApi
      .updateUser(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((err) => console.log(err));
  };

  // const handleMovieLike = (movie) => {
  //   mainApi
  //   .addSavedMovie(movie)
  //   .then((movie) => {
  //       setSavedMovies([movie, ...savedMovies]);
  //   })
  //   .catch((err) => console.log(err));
  // };

  // const handleMovieDelete = (movie) => {
  //   mainApi
  //   .deleteSavedMovie(movie.id)
  //   .then(() => {
  //     console.log(movie);
  //   })
  //   .catch((err) => console.log(err));
  // };

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  const handleTockenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          navigate("/movies");
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  };

  useEffect(() => {
    handleTockenCheck();
  }, [navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header main={true} isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/movies"
            element={
              <>
                <Header main={false} isLoggedIn={true} />
                <Movies />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/saved-movies"
            element={
              <>
                <Header main={false} isLoggedIn={true} />
                <SavedMoovies />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <>
                <Header main={false} isLoggedIn={true} />
                <Profile
                // onUpdateUser={handleUpdateUser}
                />
              </>
            }
          ></Route>

          <Route path="/signin" element={<Login />}></Route>

          <Route path="/signup" element={<Register />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
