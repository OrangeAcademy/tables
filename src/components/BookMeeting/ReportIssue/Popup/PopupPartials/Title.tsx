// MUI Imports
import { DialogTitle, Typography, styled } from '@mui/material';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

// Styles
const dialogStyles = { display: 'flex', justifyContent: 'center' }; // title container
const titleTextStyles = {fontSize: 'clamp(1rem, 10%, 1.5rem)', alignSelf: 'center' } // title styles

/* --- Styled component(s) --- */

// The shield icon used in the title of the Report issue popup card
const ShieldIcon = styled(GppGoodOutlinedIcon)({
  background: '#3d50af',
  color: 'white',
  borderRadius: '50%',
  padding: '5px',
  marginRight: '10px',
});


/*----------------- Actual Component ----------------- */
/*
  Title of the 'Report issue' popup.

  Contains:
    1.  Shield Icon
    2. 'Report an issue' title
*/

const PopupTitle = () => {
  return (
    <DialogTitle {...dialogStyles} >
      <ShieldIcon />
      <Typography {...titleTextStyles} >Report an issue</Typography>
    </DialogTitle>
  );
};

export default PopupTitle;
