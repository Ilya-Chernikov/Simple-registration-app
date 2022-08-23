import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

export const Header = () => {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{flexGrow:1}}>
            Simple RegApp
          </Typography>
          <IconButton color="inherit">
                <LoginIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}