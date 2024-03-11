import Auth from "../Auth/Auth";

function Login({ tokenError, handleLogin }) {
  return (
    <Auth
      title={"Рады видеть!"}
      button={"Войти"}
      text={"Еще не зарегистрированы?"}
      linkTo={"/signup"}
      linkText={"Регистрация"}
      tokenError={tokenError}
      handleLogin={handleLogin}
    />
  );
}

export default Login;
