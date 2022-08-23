import {WithAuthorize} from "../../HOC/WithAuthorize";
import {ControlPage} from "../ControlPage/ControlPage";
import {LoginPage} from "../Login/LoginPage";
import {UsersContainer} from "../../Containers/UsersContainer";
import {Layout} from "../../Components/Layout/Layout";

export const MainPage = () => {
  const content = WithAuthorize({ComponentForAuthorized:ControlPage, ComponentForUnauthorized:LoginPage})();
  return (
      <Layout>
        {content}
      </Layout>
  )
}
