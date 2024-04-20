import Auth from "../Auth/Auth";

function Register({ handleLogin, isLoggedIn }) {
  return (
      <Auth
        title={"Добро пожаловать!"}
        button={"Зарегистрироваться"}
        text={"Уже зарегистрированы?"}
        linkTo={"/signin"}
        linkText={"Войти"}
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
      />
  );
}

export default Register;
