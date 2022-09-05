import {SnackBar} from "../../Components/SnackBar/SnackBar";
import {useDispatch, useSelector} from "react-redux";
import {selectPayloadData} from "../../store/UI/SnackBar/selectors";
import {useCallback} from "react";
import {snackBarActions} from "../../store/UI/SnackBar/SnackBarSlice";

export const SnackBarContainer = () => {
    const dispatch = useDispatch();
    const {open, severity, message} = useSelector(state => selectPayloadData(state));
    const handleClose = useCallback((event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }

        dispatch(snackBarActions.handleOpen({open: false}));
    }, []);

    return <SnackBar open={open} message={message} severity={severity} handleClose={handleClose}/>
}