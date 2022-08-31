import {WithAuthorize} from "../../HOC/WithAuthorize";
import {ControlPage} from "../ControlPage/ControlPage";
import {LoginPage} from "../Login/LoginPage";
import {RegisterPage} from "./RegisterPage";

export const RegisterPageWithAuth = () => {
    return WithAuthorize({ComponentForAuthorized:ControlPage, ComponentForUnauthorized:RegisterPage})()
}