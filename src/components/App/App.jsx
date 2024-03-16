import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [tokenError, setTokenError] = useState("");
  const [userUpdateError, setUserUpdateError] = useState("");
  const [successMessage, setsuccessMessage] = useState("");

  const location = useLocation();
  const currentPage = location.pathname;

  const handleUserUpdate = (userInfo) => {
    setIsLoading(true);
    mainApi
      .updateUser(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
         setsuccessMessage("Профиль успешно обновлен");
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 409) {
          setUserUpdateError("Пользователь с таким email уже существует.");
        }
        setUserUpdateError("При обновлении профиля произошла ошибка.");
      })
      .finally(() => setIsLoading(false));
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("searchData");
    navigate("/");
  };

  const handleTockenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .checkToken(token)
        .then((userInfo) => {
          setIsLoggedIn(true);
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          setTokenError(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
          );
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  };

  
  const handleMovieLike = (movie) => {
    const movieToAdd = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    };

    return mainApi
      .addSavedMovie(movieToAdd)
      .then((savedMovie) => {
        savedMovies.push(savedMovie);
        setSavedMovies(savedMovies);
        return true;
      })
      .catch((err) => console.log(err));
  };

  const handleMovieDislike = (movie) => {
    const foundMovie = savedMovies.find(
      (savedMovie) => savedMovie.nameRU === movie.nameRU
    );
    return mainApi
      .deleteSavedMovie(foundMovie._id)
      .then(() => {
        const newList = savedMovies.filter((savedMovie) => savedMovie._id !== foundMovie._id);
        setSavedMovies(newList);
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMovieDelete = (movie) => {
    mainApi
      .deleteSavedMovie(movie._id)
      .then(() => {
        const newList = savedMovies.filter((savedMovie) => savedMovie._id !== movie._id);
        setSavedMovies(newList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleTockenCheck();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
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
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {currentPage === "/" ||
        currentPage === "/movies" ||
        currentPage === "/saved-movies" ||
        currentPage === "/profile" ? (
          <Header isLoggedIn={isLoggedIn} />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                moviesList={movies}
                isLoading={isLoading}
                element={Movies}
                handleMovieLike={handleMovieLike}
                handleMovieDislike={handleMovieDislike}
                handleMovieDelete={handleMovieDelete}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                moviesList={savedMovies}
                isLoading={isLoading}
                element={SavedMovies}
                handleMovieLike={handleMovieLike}
                handleMovieDislike={handleMovieDislike}
                handleMovieDelete={handleMovieDelete}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                onUpdateUser={handleUserUpdate}
                onSignOut={handleSignOut}
                userUpdateError={userUpdateError}
                successMessage={successMessage}
                element={Profile}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <Login tokenError={tokenError} handleLogin={handleLogin} />
            }
          ></Route>

          <Route
            path="/signup"
            element={<Register handleLogin={handleLogin} />}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        {currentPage === "/" ||
        currentPage === "/movies" ||
        currentPage === "/saved-movies" ? (
          <Footer />
        ) : (
          ""
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
