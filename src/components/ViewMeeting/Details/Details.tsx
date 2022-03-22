import React from 'react';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";
import { nextEventSelector } from "store/StateRoom/selectors";

const main: any = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '20px'
  }
}

const titleMeeting: any = {
  div: {
    color: 'white',
  }
}

const authorMeeting: any = {
  div: {
    color: 'white',
    display: 'flex',
    width: '450px',
    justifyContent: 'center',
  }
}

const userNameAuthor: any = {
  div: {
    marginLeft: '0.3rem',
  }
}

const userIcon: any = {
  fontSize: '20px',
  paddingTop: '0.5vw'
}

export default function Details(props: any) {
  const nextEventSelected = useSelector(nextEventSelector);

  return (
    <>
      {props.isBusy && nextEventSelected ?
        (<Box style={main.div}>
          <Box style={titleMeeting.div}>Subject <strong><i>{nextEventSelected.subject}</i></strong></Box>
          <Box style={authorMeeting.div}>
            <Box> <PersonIcon style={userIcon}> </PersonIcon></Box>
            <Box style={userNameAuthor.div} sx={{
              }}>Owner: {nextEventSelected.userEmail}</Box>
          </Box>
        </Box>)
        : !props.isBusy && nextEventSelected
        ?
        (<Box style={main.div}>
          <Box style={titleMeeting.div}>
            Meeting <strong><i>{nextEventSelected.subject}</i></strong> will start soon
          </Box>
        </Box>)
        : null
      }
    </>
  );
}
