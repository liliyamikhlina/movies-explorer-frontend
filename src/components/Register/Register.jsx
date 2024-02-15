import Auth from "../Auth/Auth";

function Register() {
  return (
      <Auth
        register={true}
        title={"Добро пожаловать!"}
        button={"Зарегистрироваться"}
        link={"Уже зарегистрированы? Войти"}
      />
  );
}

export default Register;
