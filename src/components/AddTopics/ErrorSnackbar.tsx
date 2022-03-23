import { Alert } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import {useEffect, Dispatch, SetStateAction} from "react";


interface IErrorSnackbar {
  visibility: boolean,
  setVisibility: Dispatch<SetStateAction<boolean>>,
  message: string
}


const ErrorSnackbar = ({visibility, setVisibility, message}: IErrorSnackbar)  =>{

  useEffect(() => {
    const showTimer = setTimeout(() => setVisibility(true), 2000 );

    return () => clearTimeout(showTimer);
  },[setVisibility])

  return (
    <Snackbar open={visibility}  anchorOrigin={{vertical: "top", horizontal: "right"}}  autoHideDuration={6000} onClose={()=>setVisibility(false)}>
      <Alert onClose={()=>setVisibility(false)} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
  </Snackbar>
  );
}

export default ErrorSnackbar;