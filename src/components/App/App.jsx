import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    navigate('/');
  }

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
      <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/movies"
            element={
              <>
                <Movies moviesList={movies} isLoading={isLoading} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/saved-movies"
            element={
              <>
                <SavedMovies moviesList={savedMovies} isLoading={isLoading}/>
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <>
                <Profile onUpdateUser={handleUserUpdate} onSignOut={handleSignOut} />
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
