import {useState} from 'react';

// MUI Imports
import { Box, SelectChangeEvent } from "@mui/material";


//Local imports
import IssueTypeField from "./FormFields/IssueTypeField";
import EmailField from "./FormFields/EmailField";
import IssueDescriptionField from "./FormFields/IssueDescriptionField";
import PopupButtons from "./Buttons";

// Redux
import {addReport} from "../../../../../pages/store/slices/reportIssueSlice";
import {store} from "../../../../../pages/store/store";

interface IFormProps {
  handleClose: () => void
}

/* ------------------------ Main Component ------------------------ */
/* 
  Contains the main FORM component for 'Report Issue Popup'.
  Current form fields: email [input], description [input], issue type [select/dropdown]
*/

const PopupFormFields = ({handleClose} : IFormProps) => {
  const [userEmail, setUserEmail] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [issueType, setIssueType] = useState('');

  const handleEmail = (e: React.ChangeEvent<{value: string}>) => setUserEmail(e.target.value);
  const handleIssueDescription = (e: React.ChangeEvent<{value: string}>) => setIssueDescription(e.target.value);
  const handleIssueType = (e: SelectChangeEvent) => setIssueType(e.target.value);

  const submitReport = () => {
    if(userEmail && issueDescription && issueType) {
      store.dispatch(addReport({type: 'addReport', payload: {
        userId: 2,
        email: userEmail,
        description: issueDescription,
        issueType: issueType
      }
      }))
  
      handleClose();
    }
  }


  return (
    <Box component="form">
      <EmailField userEmail={userEmail} handleEmail={handleEmail}/>
      <IssueDescriptionField issueDescription={issueDescription} handleIssueDescription={handleIssueDescription}  />
      <IssueTypeField issueType={issueType} handleIssueType={handleIssueType} />
      <PopupButtons submitReport={submitReport} handleClose={handleClose} />
    </Box>
  );
};


export default PopupFormFields;
