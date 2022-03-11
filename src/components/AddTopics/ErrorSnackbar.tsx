import { Alert } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import { useEffect } from "react";

interface IErrorSnackbar {
  visibility: boolean,
  setVisibility: () => void,
  message: string
}


const ErrorSnackbar = ({visibility, setVisibility, message}: IErrorSnackbar)  =>{

  useEffect(() => {
    const showTimer = setTimeout(() => setVisibility(), 2000 );

    return () => clearTimeout(showTimer);
  })

  return (
    <Snackbar open={visibility} autoHideDuration={6000} onClose={setVisibility}>
      <Alert onClose={setVisibility} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
  </Snackbar>
  );
}

export default ErrorSnackbar;