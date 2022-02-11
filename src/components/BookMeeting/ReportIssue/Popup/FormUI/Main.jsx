//MUI Imports
import { EmailRounded } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

// Local imports
import { OutlinedTextField } from './OutlinedTextField';
import IssueTypeField from './IssueTypeDropdown';

// Component containg the form fields for Reporting an Issue popup
const PopupFormFields = () => {
  return (
    <>
      <OutlinedTextField
        inputType="email"
        label="Your email"
        icon={<EmailRounded />}
      />
      <OutlinedTextField
        inputType="text"
        label="Description"
        icon={<EditIcon />}
        multiline
      />
      <IssueTypeField />
    </>
  );
};

export default PopupFormFields;
