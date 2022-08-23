import {Form} from "../../Components/FormStrange/Form";
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {Link} from "react-router-dom";
import {WithAuthorize} from "../../HOC/WithAuthorize";
import {ControlPage} from "../ControlPage/ControlPage";
import {LoginPage} from "./LoginPage";

export const LoginPageWithAuth = () => {
  return WithAuthorize({ComponentForAuthorized:ControlPage, ComponentForUnauthorized:LoginPage})()
}
