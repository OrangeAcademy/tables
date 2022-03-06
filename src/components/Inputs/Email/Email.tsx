import React, {useState} from "react";
import {Autocomplete, TextField} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {makeStyles} from "@mui/styles";
import {IEmail} from "../../../types/TypeComponents";

const useStyles = makeStyles({
    rightStyles: {
        paddingRight: "15px!important",
    },
    inputWidth: {
        width: "100%",
    },
    arrowBorder: {
        borderLeft: "2px solid #EDEDED",
        color: "#D4D4D4",
        paddingLeft: "10px",
    },
});

const Email = (props: IEmail) => {
    const classes = useStyles();
    const validateEmail = (e: { target: { value: string } }): void => {
        const emailValue = e.target.value;
        let regEmail =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(emailValue)) {
            alert("Invalid Email Address");
        }
    };


    return (
        <div className={classes.inputWidth}>
            <Autocomplete
                options={props.options}
                renderInput={(params) => (
                    <TextField
                        onChange={props.onChange}
                        {...params}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            placeholder: props.text,
                            className: classes.rightStyles,

                            startAdornment: (
                                <>
                                    {props.icon}
                                    {params.InputProps.startAdornment}
                                </>
                            ),
                            endAdornment: (
                                <>
                                    <KeyboardArrowDownIcon className={classes.arrowBorder}/>
                                    {params.InputProps.startAdornment}
                                </>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
};

export default Email;
