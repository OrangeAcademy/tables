import React from "react";
import dayjs from "dayjs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

function CircularTimer({seconds, timeForProgressBar}) {

  const normalise = (value) => value * 100 / timeForProgressBar;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
        height: '50vh'
      }}>
      <Box
        sx={{
          position: 'relative',
          display: 'inline-flex'
        }}
      >
        <CircularProgress
          variant="determinate"
          value={normalise(seconds)}
          style={{
            width: '20rem',
            height: '20rem',
            zIndex: '50',
            color: 'white'
          }}
        />
        <CircularProgress
          variant="determinate"
          value={100}
          style={{
            position: 'absolute',
            width: '20rem',
            height: '20rem',
            color: 'gray'
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            style={{fontSize: '4.5rem', color: 'white', fontWeight: 'bold'}}
          >
            {dayjs(seconds * 1000).format('mm:ss')}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default CircularTimer;