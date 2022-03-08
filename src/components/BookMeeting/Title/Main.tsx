import {TitleContainer, TitleText} from "./Partials/StyledTitle";
import {useAppSelector} from "../../../redux/hooks/hooks";

// Props validation
interface ITitleProps {
  location: string,
  meetingRoom: string
}


/* ----------------------  Component  -------------------- */
/* 

The Book Meeting page title (route-path: "/"), containing:
  1. Information about the office location and meeting room
  2. Meeting room availability status (free until hh:mm || busy)

*/

const Title = ({location,meetingRoom}: ITitleProps) => {
  const meetingRoomStatus = useAppSelector(state => state.stateRoom.value);
  return (
    <TitleContainer >
      <TitleText>{`${location} - ${meetingRoom}`}</TitleText>
      <TitleText>{meetingRoomStatus ? `Free until 10:50` : `Busy`}</TitleText>
    </TitleContainer>
  );
};

export default Title;
