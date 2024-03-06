import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import MoviesTemplate from "../MoviesTemplate/MoviesTemplate";
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
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const handleUserUpdate = (userInfo) => {
    setIsLoading(true);
    mainApi
      .updateUser(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
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
        .then((userInfo) => {
          setIsLoggedIn(true);
          setCurrentUser(userInfo);
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
  }, []);

  useEffect(() => {
    if (currentUser) {
      setIsLoading(true)
      Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
        .then(([movies, savedMovies]) => {
          setMovies(movies);
          setSavedMovies(savedMovies);
        })
        .catch((err) =>
          console.log(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          )
        )
        .finally(() => setIsLoading(false));
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <MoviesTemplate moviesList={movies} isLoading={isLoading}/>
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/saved-movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <MoviesTemplate moviesList={savedMovies} isLoading={isLoading}/>
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Profile onUpdateUser={handleUserUpdate} />
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
