import Auth from "../Auth/Auth";

function Register({ handleLogin }) {
  return (
      <Auth
        title={"Добро пожаловать!"}
        button={"Зарегистрироваться"}
        text={"Уже зарегистрированы?"}
        linkTo={"/signin"}
        linkText={"Войти"}
        handleLogin={handleLogin}
      />
  );
}

export default Register;
