import {LoginPage} from "./Pages/Login/LoginPage";
import {RegisterForm} from "./Components/RegisterForm/RegisterForm";
import {Provider} from "react-redux";
import {store} from "./store";
import {UsersPage} from "./Pages/Users/UsersPage";
import {RegisterPage} from "./Pages/Register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {MainPage} from "./Pages/MainPage/MainPage";
import {LoginPageWithAuth} from "./Pages/Login/LoginPageWithAuth";

export const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="main" element={<MainPage/>}/>
                  <Route path="registration" element={<RegisterPage/>}/>
                  <Route path="login" element={<LoginPageWithAuth/>}/>
                  <Route path="users" element={<UsersPage/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  )
}