import Auth from "../Auth/Auth";

function Login() {
  return (
      <Auth
        register={false} 
        title={"Рады видеть!"} 
        button={"Войти"}
        link={"Еще не зарегистрированы? Регистрация"}
        />
  );
}

export default Login;
