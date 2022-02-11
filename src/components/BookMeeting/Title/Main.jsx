import TitleText from './TitleText';

const Title = ({
  location = 'Orange {kITchen}',
  meetingRoom = 'Agora',
  meetinRoomStatus = true,
}) => {
  return (
    <>
      <TitleText>{`${location} - ${meetingRoom}`}</TitleText>
      <TitleText>{meetinRoomStatus ? `Free until 10:50` : `Busy`}</TitleText>
    </>
  );
};

export default Title;
