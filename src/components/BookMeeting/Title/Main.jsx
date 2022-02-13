import { Container } from '@mui/material';

import TitleText from './TitleText';

const Title = ({
  location = 'Orange {kITchen}',
  meetingRoom = 'Agora',
  isRoomAvailable = true,
}) => {
  return (
    <>
      <Container sx={{ mb: 10 }}>
        <TitleText>{`${location} - ${meetingRoom}`}</TitleText>
        <TitleText>{isRoomAvailable ? `Free until 10:50` : `Busy`}</TitleText>
      </Container>
    </>
  );
};

export default Title;
