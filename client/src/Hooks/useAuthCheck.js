import {useSelector} from "react-redux";
import {selectUserModule} from "../store/Entities/User/selectors";

export const useAuthCheck = () => {
  const curUser = useSelector(state => selectUserModule(state));
  return !!curUser.userData || !!localStorage.getItem('token');
}