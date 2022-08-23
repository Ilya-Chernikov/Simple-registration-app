import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Logout} from "../../store/User/thunks/logout";

export const ControlPage = () => {
    const dispatch = useDispatch();
  return (
      <div>
          <div>
              <Link to="/users">Страница пользователей</Link>
          </div>
          <div>
              <a href="" onClick={(e)=>{
                  e.preventDefault();
                  dispatch(Logout());
              }}>Выйти из аккаунта</a>
          </div>
      </div>
  )
}