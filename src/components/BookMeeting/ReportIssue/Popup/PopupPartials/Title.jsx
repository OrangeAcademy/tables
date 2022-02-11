// MUI Imports
import { DialogTitle, Typography } from '@mui/material';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const iconStyles = {
  background: '#3d50af',
  color: 'white',
  borderRadius: '50%',
  padding: '5px',
  marginRight: '10px',
};

// Header of the popup card
const PopupTitle = () => {
  return (
    <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
      <GppGoodOutlinedIcon sx={{ ...iconStyles }} />
      <Typography component="span">Report an issue</Typography>
    </DialogTitle>
  );
};

export default PopupTitle;
