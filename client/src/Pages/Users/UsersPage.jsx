import {WithAuthorize} from "../../HOC/WithAuthorize";
import {LoginPage} from "../Login/LoginPage";
import {UsersContainer} from "../../Containers/Users/UsersContainer";

export const UsersPage = () => {
    console.log("Render user Page");

  return WithAuthorize({ComponentForAuthorized:UsersContainer, ComponentForUnauthorized:LoginPage})()
}