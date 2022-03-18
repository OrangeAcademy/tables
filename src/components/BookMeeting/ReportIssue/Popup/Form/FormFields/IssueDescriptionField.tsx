//MUI Imports - Icons
import { Edit } from '@mui/icons-material';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';

// Local imports
import Label from "../FormPartials/InputLabel";

interface IReportDescriptionProps {
  issueDescription: string,
  handleIssueDescription:(e: React.ChangeEvent<{ value: string }>) => void
}

const IssueDescriptionField = ({issueDescription, handleIssueDescription}: IReportDescriptionProps) => {

  return (
    <FormControl margin="dense" fullWidth>
      <Label inputLabel="Description" />
      <OutlinedInput
        color="primary"
        label="email"
        multiline={true}
        onChange={handleIssueDescription}
        startAdornment={
          <InputAdornment position="start" sx={{ color: '#3d50af' }}> <Edit /> </InputAdornment>
        }
        type='email'
        value={issueDescription}
      />
    </FormControl>
  );
};

export default IssueDescriptionField;
