import {useState} from "react";
import {useDispatch} from "react-redux";
import {Login} from "../../store/User/thunks/login";
import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import styles from "./styles.module.css";
import {Link as ReactLink} from "react-router-dom";
import {GridView} from "@mui/icons-material";

export const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
  return (
    <Box pt="20px">
        <Container maxWidth="sm">
            <Typography variant="h6" color="primary">
                Войдите или зарегистрируйтесь
            </Typography>
            <Grid container justifyContent="space-between" spacing={1} alignItems="flex-end" pt="10px">
                <Grid item xs={12} sm={12} md={6} >
                    <TextField fullWidth required  label="Логин" variant="outlined" helperText="Введите логин" onChange={(e)=>setLogin(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField fullWidth required  label="Пароль" variant="outlined" helperText="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
                </Grid>
                <Grid item flexGrow={1}>
                        <ReactLink to="/registration">
                            <Link>
                                Зарегестрироваться
                            </Link>
                        </ReactLink>
                </Grid>
                <Grid item >
                    <Button variant="outlined" onClick={()=>dispatch(Login({payload:{email:login, password:password}}))}>Логин</Button>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

// <div>
//     <h3>Введите логи и пароль</h3>
//     <input type="text" placeholder="Введите логин" onChange={(e)=>setLogin(e.target.value)}/>
//     <input type="text" placeholder="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
//     <button onClick={()=>dispatch(Login({payload:{email:login, password:password}}))}>Войти</button>
// </div>