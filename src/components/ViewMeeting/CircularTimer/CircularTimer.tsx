import React from "react";
import dayjs from "dayjs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from "@mui/material/useMediaQuery";

interface Timer {
  seconds: number,
  timeForProgressBar: number
}

function CircularTimer({ timeForProgressBar, seconds }:Timer) {

  const normalise = (value:any) => value * 100 / timeForProgressBar;
  const largeScreen = useMediaQuery((theme:any) => theme.breakpoints.down('tablet'));
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
          size={largeScreen ? '200px' : '250px'}
          thickness={2}
          style={{
            zIndex: '50',
            color: 'white'
          }}
        />
        <CircularProgress
          variant="determinate"
          value={100}
          size={largeScreen ? '200px' : '250px'}
          thickness={2}
          style={{
            position: 'absolute',
            color: 'white',
            opacity: '0.3'
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
            style={{fontSize: '30px', color: 'white', fontWeight: 'bold'}}
          >
            {dayjs(seconds * 1000).format('mm:ss')}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default CircularTimer;