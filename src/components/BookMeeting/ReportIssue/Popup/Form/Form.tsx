import React, {ChangeEvent, useState} from 'react';
import {SelectChangeEvent} from "@mui/material";
import IssueTypeField from "./FormFields/IssueTypeField";
import EmailField from "./FormFields/EmailField";
import IssueDescriptionField from "./FormFields/IssueDescriptionField";
import PopupButtons from "./Buttons";

import {useDispatch} from "react-redux";
import {postIssue} from "../../../../../store/Report/actionCreators";
import {FormContainer} from "./FormPartials/FormContainer";

interface IFormProps {
  handleClose: () => void
}

const PopupFormFields = ({handleClose}: IFormProps) => {

  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [issueType, setIssueType] = useState('');

  const handleEmail = (_event: any, newValue: any) => setUserEmail(newValue);
  const handleIssueDescription = (e: ChangeEvent<{ value: string }>) => setIssueDescription(e.target.value);
  const handleIssueType = (e: SelectChangeEvent) => setIssueType(e.target.value);

  const submitReport = () => {
    if (userEmail && issueDescription && issueType) {
      dispatch(postIssue({
        description: issueDescription,
        email: userEmail,
        issueType: issueType
      }))
      handleClose();
    }
  }

  return (
    <FormContainer>
      <EmailField userEmail={userEmail} handleEmail={handleEmail}/>
      <IssueDescriptionField issueDescription={issueDescription} handleIssueDescription={handleIssueDescription}/>
      <IssueTypeField issueType={issueType} handleIssueType={handleIssueType}/>
      <PopupButtons submitReport={submitReport} handleClose={handleClose}/>
    </FormContainer>
  );
};

export default PopupFormFields;
