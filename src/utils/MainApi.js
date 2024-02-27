function MainApi(data) {
  const _baseUrl = data.baseUrl;
  const _headers = data.headers;

  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  const getCurrentUser = () => {
    return fetch(`${_baseUrl}/users/me`, {
      headers: _headers,
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const updateUser = ({ email, name }) => {
    return fetch(`${_baseUrl}/users/me`, {
      method: "PATCH",
      headers: _headers,
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    }).then(checkResponseStatus);
  };

  const getMyMovies = () => {
    return fetch(`${_baseUrl}/movies`, {
      headers: _headers,
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  return {
    getCurrentUser,
    updateUser,
    getMyMovies
  };
}

export default MainApi;
