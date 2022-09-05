import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Login} from "../../store/Entities/User/thunks/login";
import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import styles from "./styles.module.css";
import {Link as ReactLink} from "react-router-dom";
import {GridView} from "@mui/icons-material";
import {loginFormActions} from "../../store/UI/LoginForm/LoginFormSlice";
import {selectLoginErrorStatus, selectPasswordErrorStatus, selectPayloadData} from "../../store/UI/LoginForm/selectors";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const loginError = useSelector((state)=>selectLoginErrorStatus(state));
    const passwordError = useSelector((state)=>selectPasswordErrorStatus(state));
    const {email, password} = useSelector((state)=>selectPayloadData(state));
  return (
    <Box pt="20px">
        <Container maxWidth="sm">
            <Typography variant="h6" color="primary">
                Войдите или зарегистрируйтесь
            </Typography>
            <Grid container justifyContent="space-between" spacing={1} alignItems="flex-end" pt="10px">
                <Grid item xs={12} sm={12} md={6} >
                    <TextField fullWidth required error={loginError}  value={email} label="Логин" variant="outlined" helperText="Введите логин" onChange={(e)=>dispatch(loginFormActions.add({ email: e.target.value}))}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField fullWidth required  error={passwordError} value={password} label="Пароль" variant="outlined" helperText="Введите пароль" onChange={(e)=>dispatch(loginFormActions.add({ password: e.target.value}))}/>
                </Grid>
                <Grid item flexGrow={1}>

                            <Link href="/registration">
                                Зарегестрироваться
                            </Link>

                </Grid>
                <Grid item >
                    <Button variant="outlined" onClick={()=>{
                        dispatch(loginFormActions.handleErrors({emailError:false, passwordError:false}));
                        dispatch(Login({payload:{email, password}}));
                    }}>Войти</Button>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

