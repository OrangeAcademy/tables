import React from 'react';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

const main = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '20px'
  }
}

const titleMeeting = {
  div: {
    color: 'white',
  }
}

const authorMeeting = {
  div: {
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  }
}

const userNameAuthor = {
  div: {
    marginLeft: '0.3rem',
  }
}

const userIcon = {
  fontSize: '20px',
  paddingTop: '0.5vw'
}

export default function Details(props) {
  const {isBusy} = props;

  return (
    <>
      {isBusy ?
        (<Box style={main.div}>
          <Box style={titleMeeting.div}> Meeting <strong><i>Evaluation: Vasile</i></strong></Box>
          <Box style={authorMeeting.div}>
            <Box> <PersonIcon style={userIcon}> </PersonIcon></Box>
            <Box style={userNameAuthor.div}>Natalia Melniciuc</Box>
          </Box>
        </Box>)
        :
        (<Box style={main.div}>
          <Box style={titleMeeting.div} >
            Meeting <strong><i>Test</i></strong> will start soon
          </Box>
        </Box>)
      }
    </>
  );
}