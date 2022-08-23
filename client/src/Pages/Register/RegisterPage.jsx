import {RegisterForm} from "../../Components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {WithAuthorize} from "../../HOC/WithAuthorize";
import {ControlPage} from "../ControlPage/ControlPage";
import {LoginPage} from "../Login/LoginPage";
export const RegisterPage = () => {
    return (
        <div>
            <h2>Добрый день!</h2>
            <h3>Зарегистрируйтесь или <Link to="/login">Войдите</Link></h3>
            <Link to="/main">Main page</Link>
            <RegisterForm/>
        </div>
    )
}

