import {selectUiModule} from "../selectors";

export const selectSnackBarModule = (state) => selectUiModule(state)?.snackBar;

export const selectPayloadData = (state) => {
    return {
        open:selectSnackBarModule(state)?.open,
        severity:selectSnackBarModule(state)?.severity,
        message:selectSnackBarModule(state)?.message,
    }
}