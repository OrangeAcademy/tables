import {ChangeEvent, useState} from 'react';
import {Box, SelectChangeEvent} from "@mui/material";
import IssueTypeField from "./FormFields/IssueTypeField";
import EmailField from "./FormFields/EmailField";
import IssueDescriptionField from "./FormFields/IssueDescriptionField";
import PopupButtons from "./Buttons";


import {useDispatch} from "react-redux";
import { setIssue } from 'store/Report/reportSlice';


interface IFormProps {
    handleClose: () => void
}

const PopupFormFields = ({handleClose}: IFormProps) => {
    const dispatch = useDispatch();
    const [userEmail, setUserEmail] = useState('');
    const [issueDescription, setIssueDescription] = useState('');
    const [issueType, setIssueType] = useState('');

    const handleEmail = (e: ChangeEvent<{ value: string }>) => setUserEmail(e.target.value);
    const handleIssueDescription = (e: ChangeEvent<{ value: string }>) => setIssueDescription(e.target.value);
    const handleIssueType = (e: SelectChangeEvent) => setIssueType(e.target.value);

    const submitReport = () => {
        if (userEmail && issueDescription && issueType) {
            dispatch(setIssue({
                userId: 2,
                email: userEmail,
                description: issueDescription,
                issueType: issueType
            }))
            handleClose();
        }
    }
    return (
        <Box component="form">
            <EmailField userEmail={userEmail} handleEmail={handleEmail}/>
            <IssueDescriptionField issueDescription={issueDescription} handleIssueDescription={handleIssueDescription}/>
            <IssueTypeField issueType={issueType} handleIssueType={handleIssueType}/>
            <PopupButtons submitReport={submitReport} handleClose={handleClose}/>
        </Box>
    );
};


export default PopupFormFields;
