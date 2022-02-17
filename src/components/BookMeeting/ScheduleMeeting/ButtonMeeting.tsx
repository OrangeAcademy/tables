import React from "react";

// MUI Imports
import { Grid, Button, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';

// Styles
import styles from './Styles';

const ButtonMeeting = () => {
  return (
    <Grid sx={{ ...styles.grid }}>
      <Typography variant="h4" sx={{ ...styles.title }}>
        Next Meeting - Test
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<DateRangeIcon sx={{ ...styles.icon }} />}
        sx={{ ...styles.button }}
      >
        <Typography variant="subtitle1" sx={{ ...styles.btnText }}>
          SCHEDULE A MEETING
        </Typography>
      </Button>
    </Grid>
  );
};

export default ButtonMeeting;