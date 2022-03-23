import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {roomStateSelector} from "../../../store/StateRoom/selectors";
import {useSelector} from "react-redux";

interface IsBusy {
  isBusy: boolean
}

const StateInfo = ({isBusy}: IsBusy) => {
  const roomState = useSelector(roomStateSelector)
const {roomName, roomLocation} = roomState
  let stat: string = '';

  if (isBusy) {
    stat = 'Busy'
    document.body.style.backgroundColor = "#ce3a12";
  } else {
    stat = 'Free'
    document.body.style.backgroundColor = "#50bf8a";
  }
  return (
    <Box className='header' sx={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>
      <Typography variant='h1' fontWeight='600' sx={{
        fontSize: {
          mobile: '7.5vw',
          tablet: '3.5vw'
        }
      }}>{roomLocation} - {roomName}</Typography>
      <Typography variant='h1' fontWeight='600' sx={{
        fontSize: {
          mobile: '7.5vw',
          tablet: '3.5vw'
        }
      }}>{stat}</Typography>
    </Box>
  )

}

export default StateInfo;
