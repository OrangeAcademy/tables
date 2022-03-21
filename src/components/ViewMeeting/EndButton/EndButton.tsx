import Button from "@mui/material/Button";
import {styled} from "@mui/material";
import {deleteEvent} from "../../../store/Event/actionCreators";
import {useAppDispatch} from "../../../hooks/redux";
import { useEffect } from "react";

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

const EndButton = ({isBusy, upcomingEvent, getNextEventFunction}: any) => {
  const dispatch = useAppDispatch();
  const DeleteEvent = (id: string) => {
    dispatch(deleteEvent(id))
      .unwrap()
      .then(() => {
        getNextEventFunction();
        window.location.reload();
      })
  }

  return (
    <>
      {isBusy 
      ? <MeetingEndButton onClick={() => DeleteEvent(upcomingEvent._id)}>End Now</MeetingEndButton> 
      : null
    }
    </>
  )

}

export default EndButton;
