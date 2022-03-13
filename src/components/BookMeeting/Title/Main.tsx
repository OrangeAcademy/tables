import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { roomLocationSelector, roomNameSelector, roomStatusSelector, nextEventStartSelector } from "store/StateRoom/selectors";
import {TitleContainer, TitleText} from "./Partials/StyledTitle";

/* ----------------------  Component  -------------------- */
/* 

The Book Meeting page title (route-path: "/"), containing:
  1. Information about the office location and meeting room
  2. Meeting room availability status (free until hh:mm || busy)

*/

const Title = () => {
  const roomLocation = useSelector(roomLocationSelector);
  const roomName = useSelector(roomNameSelector);
  const isRoomBusy = useSelector(roomStatusSelector);
  const nextEventStart = useSelector(nextEventStartSelector);


  return (
    <TitleContainer >
      <TitleText>{`${roomLocation} - ${roomName}`}</TitleText>
      <TitleText>{isRoomBusy ? `${roomName} is busy` : `Free until ${dayjs(nextEventStart).format('HH:mm')}` }</TitleText>
    </TitleContainer>
  );
};

export default Title;
