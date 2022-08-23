import {useState} from "react";
import {useDispatch} from "react-redux";
import {Login} from "../../store/User/thunks/login";

export const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
  return (
      <div>
          <h3>Введите логи и пароль</h3>
          <input type="text" placeholder="Введите логин" onChange={(e)=>setLogin(e.target.value)}/>
          <input type="text" placeholder="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={()=>dispatch(Login({payload:{email:login, password:password}}))}>Войти</button>
      </div>
  )
}