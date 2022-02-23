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
  fontSize: '20px',
  '&:hover': {
   background: '#d4d1d1'
  },
})

interface IsBusy {
  isBusy: boolean
}

const EndButton = ({ isBusy }: IsBusy) => {

  if (isBusy) {
    return (<MeetingEndButton>End Now</MeetingEndButton>)
  } else return (<></>)
}

export default EndButton;