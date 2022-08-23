import {Form} from "../../Components/FormStrange/Form";
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {Link} from "react-router-dom";

export const LoginPage = () => {
  return (
     <div>
       <h2>Добрый день!</h2>
       <h3>Войдите или <Link to="/registration">зарегистрируйтесь</Link></h3>
       <Link to="/main">Main page</Link>
       <LoginForm/>
     </div>
  )
}
