//MUI Imports - Icons
import { EmailRounded, Edit, MeetingRoom, Category } from '@mui/icons-material';

// Local imports
import  OutlinedTextField from './FormPartials/OutlinedTextField'; // Creates input field(s)
import IssueTypeField from './FormPartials/IssueTypeDropdown'; // Creates dropdown


/* ------------------------ Main Component ------------------------ */
/* 
  Contains the main FORM component for 'Report Issue Popup'.
  Current form fields: email [input], description [input], issue type [select/dropdown]
*/

const PopupFormFields = () => {
  // Used for generating options in 'Issue Type' dropdown
  const issueOptions = [{ category: "app", icon: <Category />}, {category: "meeting", icon: <MeetingRoom />}];

  return (
    <>
      <OutlinedTextField inputType="email" label="Your email" icon={<EmailRounded />} multiline={false} />
      <OutlinedTextField inputType="text" label="Description" icon={<Edit />} multiline={true} />
      <IssueTypeField {...issueOptions} />
    </>
  );
};

export default PopupFormFields;
