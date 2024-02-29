import Auth from "../Auth/Auth";

function Login() {
  return (
    <Auth
      title={"Рады видеть!"}
      button={"Войти"}
      text={"Еще не зарегистрированы?"}
      linkTo={"/signup"}
      linkText={"Регистрация"}
    />
  );
}

export default Login;
