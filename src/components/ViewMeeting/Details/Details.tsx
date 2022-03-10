import React from 'react';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector } from "../../../redux/hooks/hooks";

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
    alignItems: 'center'
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

export default function Details() {
  const {upcomingEvent, roomState: {isBusy}} = useAppSelector(state => state);

  return (
    <>
      {isBusy ?
        (<Box style={main.div}>
          <Box style={titleMeeting.div}> Meeting <strong><i>{upcomingEvent.subject}</i></strong></Box>
          <Box style={authorMeeting.div}>
            <Box> <PersonIcon style={userIcon}> </PersonIcon></Box>
            <Box style={userNameAuthor.div}>{upcomingEvent.attendees[0]}</Box>
          </Box>
        </Box>)
        :
        (<Box style={main.div}>
          <Box style={titleMeeting.div}>
            Meeting <strong><i>{upcomingEvent?.subject || 'Unknown'}</i></strong> will start soon
          </Box>
        </Box>)
      }
    </>
  );
}
