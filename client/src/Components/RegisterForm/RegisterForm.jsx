import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Register} from "../../store/User/thunks/register";
import {UsersPage} from "../../Pages/Users/UsersPage";
import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as ReactLink} from "react-router-dom";
import {Login} from "../../store/User/thunks/login";

export const RegisterForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <Box pt="20px">
            <Container maxWidth="sm">
                <Typography variant="h6" color="primary">
                   Зарегестрируйтесь или войдите
                </Typography>
                <Grid container justifyContent="space-between" spacing={1} alignItems="flex-end" pt="10px">
                    <Grid item xs={12} sm={12} md={6} >
                        <TextField fullWidth required  label="Email" variant="outlined" helperText="Введите email" onChange={(e)=>setLogin(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField fullWidth required  label="Пароль" variant="outlined" helperText="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
                    </Grid>
                    <Grid item flexGrow={1}>
                        <ReactLink to="/login">
                            <Link>
                                Войти
                            </Link>
                        </ReactLink>
                    </Grid>
                    <Grid item >
                        <Button variant="outlined" onClick={()=>dispatch(Register({payload:{email:login, password:password}}))}>Регистрация</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

// <div>
//     <h3>Для регистрации введите данные</h3>
//     <input type="text" placeholder="Введите ФИО" onChange={(e)=>setFIO(e.target.value)}/>
//     <input type="text" placeholder="Введите email" onChange={(e)=>setLogin(e.target.value)}/>
//     <input type="text" placeholder="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
//     <button onClick={()=> dispatch(Register({payload:{email:login, password:password}}))}>Зарегестрироваться</button>
// </div>