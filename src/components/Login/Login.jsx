import Auth from "../Auth/Auth";

function Login({ tokenError }) {
  return (
    <Auth
      title={"Рады видеть!"}
      button={"Войти"}
      text={"Еще не зарегистрированы?"}
      linkTo={"/signup"}
      linkText={"Регистрация"}
      tokenError={tokenError}
    />
  );
}

export default Login;
