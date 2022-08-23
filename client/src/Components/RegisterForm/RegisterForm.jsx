import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Register} from "../../store/User/thunks/register";
import {UsersPage} from "../../Pages/Users/UsersPage";

export const RegisterForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [FIO, setFIO] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Для регистрации введите данные</h3>
            <input type="text" placeholder="Введите ФИО" onChange={(e)=>setFIO(e.target.value)}/>
            <input type="text" placeholder="Введите email" onChange={(e)=>setLogin(e.target.value)}/>
            <input type="text" placeholder="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=> dispatch(Register({payload:{email:login, password:password}}))}>Зарегестрироваться</button>
        </div>
    )
}