import React from "react";
//MUI Imports
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
  },
  space: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const AddAttendeesAgendaButtons = () => {
  const StyledButton = styled(Button)({
    fontWeight: "bold",
    color: "black",
    border: "1px solid rgb(211,211,211)",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 2rem",
  });
  const classes = useStyles();
  return (
    <>
      <Stack direction="row" spacing={2} className={classes.container}>
        <StyledButton className={classes.space} fullWidth variant="outlined" endIcon={<AddCircleOutlineIcon />}>
          Add <br></br> Attendees
        </StyledButton>
        <StyledButton className={classes.space} fullWidth variant="outlined" endIcon={<FormatListBulletedIcon />}>
          Add <br></br> Agenda
        </StyledButton>
      </Stack>
    </>
  );
};

export default AddAttendeesAgendaButtons;
