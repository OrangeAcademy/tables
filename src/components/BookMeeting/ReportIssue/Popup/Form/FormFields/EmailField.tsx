//MUI Imports - Icons
import { EmailRounded} from '@mui/icons-material';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';

// Local imports
import Label from "../FormPartials/InputLabel";

interface IReportEmailProps {
  userEmail: string,
  handleEmail:(e: React.ChangeEvent<{    value: string;}>) => void
}


const EmailField = ({userEmail, handleEmail}: IReportEmailProps) => {

  return (
    <FormControl margin="dense" fullWidth>
      <Label inputLabel="Your email" />
      <OutlinedInput
        color="primary"
        label="email"
        onChange={handleEmail}
        startAdornment={
          <InputAdornment position="start" sx={{ color: '#3d50af' }}> <EmailRounded /> </InputAdornment>
        }
        type='email'
        value={userEmail}
      />

    </FormControl>

  );
};

export default EmailField;
