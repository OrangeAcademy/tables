import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { useSelector } from "react-redux";
import { roomLocationSelector, roomNameSelector, roomStatusSelector, nextEventStartSelector } from "store/StateRoom/selectors";
import {TitleContainer, TitleText} from "./Partials/StyledTitle";

/* ----------------------  Component  -------------------- */
/* 

The Book Meeting page title (route-path: "/"), containing:
  1. Information about the office location and meeting room
  2. Meeting room availability status (free until hh:mm || busy)

*/

dayjs.extend(isToday);

const Title = () => {
  const roomLocation = useSelector(roomLocationSelector);
  const roomName = useSelector(roomNameSelector);
  const isRoomBusy = useSelector(roomStatusSelector);
  const nextEventStart = useSelector(nextEventStartSelector);

  const isNextEventToday = dayjs(nextEventStart).isToday();
  const timeNextEventStart = dayjs(nextEventStart).format('HH:mm');

  return (
    <TitleContainer >
      <TitleText>{`${roomLocation} - ${roomName}`}</TitleText>
      <TitleText>{isRoomBusy ? `${roomName} is busy` : isNextEventToday ?  `Free until ${timeNextEventStart}` : "Free"}</TitleText>
    </TitleContainer>
  );
};

export default Title;
