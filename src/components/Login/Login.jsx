import Auth from "../Auth/Auth";

function Login({ tokenError, handleLogin, isLoggedIn }) {
  return (
    <Auth
      title={"Рады видеть!"}
      button={"Войти"}
      text={"Еще не зарегистрированы?"}
      linkTo={"/signup"}
      linkText={"Регистрация"}
      tokenError={tokenError}
      handleLogin={handleLogin}
      isLoggedIn={isLoggedIn}
    />
  );
}

export default Login;
