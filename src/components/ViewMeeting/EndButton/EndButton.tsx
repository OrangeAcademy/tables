import React, {useEffect} from "react";
import Button from "@mui/material/Button";
import {styled} from "@mui/material";
import {deleteEvent} from "../../../redux/slices/eventSlice";
import {useDispatch} from "react-redux";
import { useAppSelector } from "../../../redux/hooks/hooks";

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



const EndButton = () => {
  const {upcomingEvent, roomState: {isBusy}} = useAppSelector(state => state);

  const dispatch = useDispatch();
  const DeleteEvent = (id: number) => {
    dispatch(deleteEvent(id))
  }
  if (isBusy) {
    return (<MeetingEndButton onClick={() => DeleteEvent(upcomingEvent.elementId)}>End Now</MeetingEndButton>)
  } else return (<></>)
}

export default EndButton;
