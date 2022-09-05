import {LoginPage} from "./Pages/Login/LoginPage";
import {RegisterForm} from "./Components/RegisterForm/RegisterForm";
import {Provider} from "react-redux";
import {store} from "./store";
import {UsersPage} from "./Pages/Users/UsersPage";
import {RegisterPage} from "./Pages/Register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {MainPage} from "./Pages/MainPage/MainPage";
import {LoginPageWithAuth} from "./Pages/Login/LoginPageWithAuth";
import CssBaseline from '@mui/material/CssBaseline';
import {RegisterPageWithAuth} from "./Pages/Register/RegisterPageWithAuth";
import {SnackBarContainer} from "./Containers/SnackBar/SnackBarContainer";

export const App = () => {
  return (
    <>
        <CssBaseline />
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="main" element={<MainPage/>}/>
                    <Route path="registration" element={<RegisterPageWithAuth/>}/>
                    <Route path="login" element={<LoginPageWithAuth/>}/>
                    <Route path="users" element={<UsersPage/>}/>
                </Routes>
            </BrowserRouter>
            <SnackBarContainer/>
        </Provider>
    </>
  )
}