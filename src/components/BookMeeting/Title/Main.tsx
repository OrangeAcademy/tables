import {TitleContainer, TitleText} from "./Partials/StyledTitle";

// Props validation
interface props {
  location: string,
  meetingRoom: string, 
  isRoomAvailable?: boolean
}


/* ----------------------  Component  -------------------- */
/* 

The Book Meeting page title (route-path: "/"), containing:
  1. Information about the office location and meeting room
  2. Meeting room availability status (free until hh:mm || busy)

*/

const Title = ({location,meetingRoom,isRoomAvailable}: props) => {
  return (
    <TitleContainer >
      <TitleText>{`${location} - ${meetingRoom}`}</TitleText>
      <TitleText>{isRoomAvailable ? `Free until 10:50` : `Busy`}</TitleText>
    </TitleContainer>
  );
};

export default Title;
