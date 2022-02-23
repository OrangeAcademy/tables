import { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";

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

const Email = (props) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.inputWidth}>
      <Autocomplete
        options={props.options}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setEmail(e.target.value)}
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
                  <KeyboardArrowDownIcon className={classes.arrowBorder} />
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
