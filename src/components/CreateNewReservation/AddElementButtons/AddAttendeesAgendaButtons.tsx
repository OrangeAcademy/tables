import React, { useState } from 'react';
//MUI Imports
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import AddTopic from '../../AddTopics/AddTopics';

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

const AgendaAttendeesText = styled("p")({
  
})

const AddAttendeesAgendaButtons = () => {
  const [showAgenda, setShowAgenda] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Stack direction="row" spacing={2} className={classes.container}>
        <StyledButton
          className={classes.space}
          fullWidth
          variant="outlined"
          endIcon={<AddCircleOutlineIcon />}
        >
          <p>Add</p>  
          <p>Attendees</p>
        </StyledButton>
        <StyledButton
          onClick={() => setShowAgenda(!showAgenda)}
          className={classes.space}
          fullWidth
          variant="outlined"
          endIcon={<FormatListBulletedIcon />}
        >
                <p>Add</p>  
                <p>Agenda</p>
        </StyledButton>
      </Stack>

      {showAgenda && (
        <AddTopic showAgenda={showAgenda} setShowAgenda={setShowAgenda} />
      )}
    </>
  );
};

export default AddAttendeesAgendaButtons;
