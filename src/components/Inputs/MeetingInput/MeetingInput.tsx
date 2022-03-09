import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import {IInputs} from "../../../types/TypeComponents";

const MeetingInput = (props:IInputs) => {
  const [subject, setSubject] = useState("");
  return (
    <>
      <TextField
        onChange={(e) => setSubject(e.target.value)}
        fullWidth
        InputProps={{
          placeholder: props.text,
          startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
        }}
      />
    </>
  );
};

export default MeetingInput;
