import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";

const MeetingInput = (props) => {
  const [subject, setSubject] = useState("");
  console.log(subject);
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
