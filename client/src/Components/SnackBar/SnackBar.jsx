import {Alert, Snackbar} from "@mui/material";

export const SnackBar = ({open, severity, message, handleClose}) => {
  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
  )
}