function MoviesApi(data) {
  const _baseUrl = data.baseUrl;

  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  const getMovies = () => {
    return fetch(`${_baseUrl}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  return { getMovies };
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
