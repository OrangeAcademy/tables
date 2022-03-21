import Button from "@mui/material/Button";
import {styled} from "@mui/material";
import {deleteEvent} from "../../../store/Event/actionCreators";
import {useAppDispatch} from "../../../hooks/redux";
import { useEffect } from "react";
import useAutobook from "hooks/useAutoBook";
import { useSelector } from "react-redux";
import { nextEventSelector } from "store/StateRoom/selectors";

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
  const nextEvent = useSelector(nextEventSelector);
  const ev = upcomingEvent;
  const dispatch = useAppDispatch();
  const { handlePostAndUpdate } = useAutobook();

  const DeleteEvent = async () => {
    await handlePostAndUpdate();
    if(nextEvent && nextEvent.elementId) {

      dispatch(deleteEvent(nextEvent.elementId))
      .unwrap()
      .then(() => {
        getNextEventFunction();
        // window.location.reload();
      })
    }
    }



  return (
    <>
      {isBusy 
      ? <MeetingEndButton onClick={() => DeleteEvent()}>End Now</MeetingEndButton> 
      : null
    }
    </>
  )

}


export default EndButton;
