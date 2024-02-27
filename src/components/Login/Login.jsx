import Auth from "../Auth/Auth";

function Login() {
  return (
    <Auth
      register={false}
      title={"Рады видеть!"}
      button={"Войти"}
      text={"Еще не зарегистрированы?"}
      linkTo={"/signup"}
      linkText={"Регистрация"}
    />
  );
}

export default Login;
