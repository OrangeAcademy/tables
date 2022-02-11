import { Typography } from '@mui/material';

const style = {
  mt: 10,
  color: 'white',
  backgroundColor: '#50bf8a',
};

const Title = ({
  location = 'Orange {kITchen}',
  meetingRoom = 'Agora',
  meetinRoomStatus = true,
}) => {
  return (
    <div>
      <Typography
        sx={{ ...style }}
        variant="h1"
        align="center"
        color="textSecondary"
        component="h2"
      >
        {location} - {meetingRoom}
      </Typography>

      <Typography
        sx={{ ...style }}
        variant="h1"
        align="center"
        color="textSecondary"
        component="h2"
      >
        {meetinRoomStatus ? `Free until 10:50` : `Busy`}
      </Typography>
    </div>
  );
};

export default Title;
