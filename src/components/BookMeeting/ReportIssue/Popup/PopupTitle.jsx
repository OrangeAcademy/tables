import { DialogTitle, Typography } from '@mui/material';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const PopupTitle = () => {
  return (
    <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
      <GppGoodOutlinedIcon
        sx={{
          background: '#3d50af',
          color: 'white',
          borderRadius: '50%',
          padding: '5px',
          marginRight: '10px',
        }}
      />
      <Typography component="span">Report an issue</Typography>
    </DialogTitle>
  );
};

export default PopupTitle;
