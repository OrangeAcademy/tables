import React from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material";

const MeetingEndButton = styled(Button)({
  width: '100%',
  background: 'white',
  borderRadius: '10px',
  height: '4rem',
  color: 'black',
  textTransform: 'none',
  fontSize: '1.5vw',
  '&:hover': {
   background: '#d4d1d1'
  },
})

const EndButton = (props) => {
  const {isBusy} = props

  if (isBusy) {
    return (<MeetingEndButton>End Now</MeetingEndButton>)
  } else return (<></>)
}

export default EndButton;