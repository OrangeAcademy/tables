//MUI Imports - Icons
import {EmailRounded} from '@mui/icons-material';
import {FormControl, OutlinedInput, InputAdornment, TableCell} from '@mui/material';

// Local imports
import React, {useEffect} from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../../../../../../store/User/selectors";
import {getUsers} from "../../../../../../store/User/actionCreators";

interface IReportEmailProps {
  userEmail: string,
  handleEmail: any
}

const   EmailField = ({userEmail, handleEmail}: IReportEmailProps) => {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  return (
    <Autocomplete
      value={userEmail}
      fullWidth
      options={users.map((user) => user.email)}
      renderInput={(params) => <TextField {...params} label="Email"/>}
      onChange={handleEmail}
    />
  );
};

export default EmailField;
