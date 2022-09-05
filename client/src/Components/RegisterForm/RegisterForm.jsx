import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Register} from "../../store/Entities/User/thunks/register";
import {UsersPage} from "../../Pages/Users/UsersPage";
import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as ReactLink} from "react-router-dom";
import {Login} from "../../store/Entities/User/thunks/login";
import {loginFormActions} from "../../store/UI/LoginForm/LoginFormSlice";
import {selectPayloadData, selectRegisterErrorStatus, selectPasswordErrorStatus} from "../../store/UI/RegisterForm/selectors";
import {registerFormActions} from "../../store/UI/RegisterForm/RegisterFormSlice";


export const RegisterForm = () => {
    const dispatch = useDispatch();
    const loginError = useSelector((state)=>selectRegisterErrorStatus(state));
    const passwordError = useSelector((state)=>selectPasswordErrorStatus(state));
    const {email, password} = useSelector((state)=>selectPayloadData(state));

    return (
        <Box pt="20px">
            <Container maxWidth="sm">
                <Typography variant="h6" color="primary">
                   Зарегестрируйтесь или войдите
                </Typography>
                <Grid container justifyContent="space-between" spacing={1} alignItems="flex-end" pt="10px">
                    <Grid item xs={12} sm={12} md={6} >
                        <TextField fullWidth required value={email} error={loginError} label="Email" variant="outlined" helperText="Введите email" onChange={(e)=>dispatch(registerFormActions.add({ email: e.target.value}))}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField fullWidth required value={password}  error={passwordError} label="Пароль" variant="outlined" helperText="Введите пароль" onChange={(e)=>dispatch(registerFormActions.add({ password: e.target.value}))}/>
                    </Grid>
                    <Grid item flexGrow={1}>

                            <Link href="/login">
                                Войти
                            </Link>

                    </Grid>
                    <Grid item >
                        <Button variant="outlined" onClick={()=>{
                            dispatch(registerFormActions.handleErrors({emailError:false, passwordError:false}));
                            dispatch(Register({payload:{email:email, password:password}}))
                        }}>Регистрация</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

