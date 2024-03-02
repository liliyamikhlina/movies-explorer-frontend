function MainApi(data) {
  const _baseUrl = data.baseUrl;

  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
   
    // const headers = res.headers.get("content-type");
    // let result;
    // if (headers.split("; ")[0] === 'text/html') {
    //   result = await res.text();
    // } else {
    //   result = await res.json();
    // }
    // console.log(result);
    // return result
  // };

  const getCurrentUser = () => {
    const token = localStorage.getItem("jwt");
    return fetch(`${_baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const updateUser = ({ email, name }) => {
    const token = localStorage.getItem("jwt");
    return fetch(`${_baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    }).then(checkResponseStatus);
  };

  const getSavedMovies = () => {
    const token = localStorage.getItem("jwt");
    return fetch(`${_baseUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const addSavedMovie = (movie) => {
    const token = localStorage.getItem("jwt");
    return fetch(`${_baseUrl}/movies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...movie,
      }),
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const deleteSavedMovie = (movieId) => {
    const token = localStorage.getItem("jwt");
    return fetch(`${_baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const registerUser = (name, email, password) => {
    return fetch(`${_baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const loginUser = (email, password) => {
    return fetch(`${_baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        return checkResponseStatus(res);
      })
      .then((data) => {
        localStorage.setItem("jwt", data);
        return data;
      });
  };

  const checkToken = () => {
    const token = localStorage.getItem("jwt");
    return fetch(`${_baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  return {
    getCurrentUser,
    updateUser,
    getSavedMovies,
    addSavedMovie,
    deleteSavedMovie,
    registerUser,
    loginUser,
    checkToken,
  };
}

const mainApi = new MainApi({
  baseUrl: "http://localhost:3000",
});

export default mainApi;
