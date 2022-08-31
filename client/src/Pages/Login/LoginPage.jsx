import {Form} from "../../Components/FormStrange/Form";
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {Link} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import {Layout} from "../../Components/Layout/Layout";

export const LoginPage = () => {
  return (
        <Layout>
          <LoginForm/>
        </Layout>
  )
}
