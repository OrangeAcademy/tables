import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { IPropsInputs } from "../../../Types/IGlobal";

const MeetingInput = (props: IPropsInputs): JSX.Element => {
  const [subject, setSubject] = useState<string>("");
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
