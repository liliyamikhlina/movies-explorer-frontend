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
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [tokenError, setTokenError] = useState("");
  const [userUpdateError, setUserUpdateError] = useState("");

  const location = useLocation();
  const currentPage = location.pathname;

  const handleUserUpdate = (userInfo) => {
    setIsLoading(true);
    mainApi
      .updateUser(userInfo)
      .then((updatedUserInfo) => {
        setCurrentUser(updatedUserInfo);
      })
      .catch((err) => {
        setUserUpdateError("При обновлении профиля произошла ошибка.");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
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
          navigate("/movies");
        })
        .catch((err) => {
          setTokenError("При авторизации произошла ошибка. Токен не передан или передан не в том формате.")
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
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
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                onUpdateUser={handleUserUpdate}
                onSignOut={handleSignOut}
                userUpdateError={userUpdateError}
                element={Profile}
              />
            }
          />

          <Route path="/signin" element={<Login
          tokenError={tokenError} /> }></Route>

          <Route path="/signup" element={<Register />}></Route>

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
