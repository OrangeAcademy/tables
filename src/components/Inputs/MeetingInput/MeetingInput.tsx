import React from "react";
import {InputAdornment, TextField} from "@mui/material";
import {IInputs} from "../../../types/TypeComponents";

const MeetingInput = (props: IInputs) => {


    return (
        <>
            <TextField
                onChange={props.onChange}
                value={props.value}
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
