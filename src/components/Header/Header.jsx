import logo from "../../images/logo.svg";
import './Header.css';

function Header() {
    return (
        <header class="header">
        <img alt="Лого" src={logo} className="header__logo" />
        <p>Регистрация</p>
        </header>
    )
}

export default Header;