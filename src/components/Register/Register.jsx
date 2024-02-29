import Auth from "../Auth/Auth";

function Register() {
  return (
      <Auth
        title={"Добро пожаловать!"}
        button={"Зарегистрироваться"}
        text={"Уже зарегистрированы?"}
        linkTo={"/signin"}
        linkText={"Войти"}
      />
  );
}

export default Register;
