import { OutlinedTextField } from '../FormUI/OutlinedField';
import { OutlinedSelectField } from '../FormUI/OutlinedField';
import { EmailRounded } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

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
      <OutlinedSelectField />
    </>
  );
};

export default PopupFormFields;
