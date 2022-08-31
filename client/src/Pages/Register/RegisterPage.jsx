import {RegisterForm} from "../../Components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {WithAuthorize} from "../../HOC/WithAuthorize";
import {ControlPage} from "../ControlPage/ControlPage";
import {LoginPage} from "../Login/LoginPage";
import {Layout} from "../../Components/Layout/Layout";
export const RegisterPage = () => {
    return (
        <Layout>
            <RegisterForm/>
        </Layout>
    )
}

