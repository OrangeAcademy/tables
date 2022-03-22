import {Alert, AlertColor} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

interface ISnackbarComponent {
    visibility: boolean,
    setVisibility: any,
    message: string,
    severity: AlertColor | undefined
}

const SnackbarComponent = ({visibility, setVisibility, message, severity}: ISnackbarComponent)  =>{

    return (
        <Snackbar open={visibility}  anchorOrigin={{vertical: "top", horizontal: "right"}}  autoHideDuration={3000} onClose={()=>setVisibility(false)}>
            <Alert onClose={()=>setVisibility(false)} severity={severity} sx={{ width: '100%', whiteSpace: 'pre-line'}}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default SnackbarComponent;
