import { Container } from '@mui/material';

import TitleText from './TitleText';

const Title = ({
  location = 'Orange {kITchen}',
  meetingRoom = 'Agora',
  meetinRoomStatus = true,
}) => {
  return (
    <>
      <Container sx={{ mb: 10 }}>
        <TitleText>{`${location} - ${meetingRoom}`}</TitleText>
        <TitleText>{meetinRoomStatus ? `Free until 10:50` : `Busy`}</TitleText>
      </Container>
    </>
  );
};

export default Title;
