// MUI Imports
import { Container } from '@mui/material';

// Local imports
import TitleText from './TitleText';

// Styles
const containerStyles = { mb: 10 };

// The main page title containing
// 1. Information about the office location and meeting room
// 2. Its availability status (free until hh:mm || busy)
const Title = ({
  location = 'Orange {kITchen}',
  meetingRoom = 'Agora',
  isRoomAvailable = true,
}) => {
  return (
    <Container sx={{ ...containerStyles }}>
      <TitleText>{`${location} - ${meetingRoom}`}</TitleText>
      <TitleText>{isRoomAvailable ? `Free until 10:50` : `Busy`}</TitleText>
    </Container>
  );
};

export default Title;
