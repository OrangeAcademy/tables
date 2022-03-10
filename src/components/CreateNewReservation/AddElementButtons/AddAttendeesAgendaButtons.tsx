import React, { useState } from 'react';
//MUI Imports
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AddTopic from '../../AddTopics/AddTopics';
import AddAttendees from "../../AddAttendees/AddAttendees";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
  },
  space: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const StyledButton = styled(Button)({
  fontWeight: 'bold',
  color: 'black',
  border: '1px solid rgb(211,211,211)',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 2rem',
  fontSize: '12px',
});

const AddAttendeesAgendaButtons = () => {
  const [showAgenda, setShowAgenda] = useState(false);
  const [showAttendees, setShowAttendees] = useState(false);
  const classes = useStyles();

  const hanldeAgendaPopup = () => setShowAgenda(!showAgenda);
  const handleAttendeesPopup = () => setShowAttendees(!showAttendees)

  return (
    <>
      <Stack direction="row" spacing={2} className={classes.container}>
        <StyledButton
          className={classes.space}
          onClick={handleAttendeesPopup}
          fullWidth
          variant="outlined"
          endIcon={<AddCircleOutlineIcon />}
        >
          Add <br></br> Attendees
        </StyledButton>

        {showAttendees && (
        <AddAttendees showAttendees={showAttendees} setShowAttendees={setShowAttendees} />
      )}

        <StyledButton
          onClick={hanldeAgendaPopup}
          className={classes.space}
          fullWidth
          variant="outlined"
          endIcon={<FormatListBulletedIcon />}
        >
          Add <br></br> Agenda
        </StyledButton>
      </Stack>

      {showAgenda && (
        <AddTopic showAgenda={showAgenda} setShowAgenda={setShowAgenda} />
      )}
    </>
  );
};

export default AddAttendeesAgendaButtons;
