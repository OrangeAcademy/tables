// MUI Imports
import { DialogActions, Button, styled, Typography } from '@mui/material';


// Props validation
interface IPopupProps {
  handleClose: Function
}

/* ---- Styled Component(s) ---- */

// Button style for 'Cancel' and 'Report' buttons
const StyledBtn = styled(Button)(({theme}) => ({
  width: "auto",
  [theme.breakpoints.down('tablet')]: {
    width: "50%"
  }
}))


/* ------------------------ Component ------------------------ */
/* 
 Contains 'Report' and 'Cancel' buttons for the Report Issue Popup. 
*/
const PopupButtons = ({ handleClose }: IPopupProps) => {
  return (
    <DialogActions>

      <StyledBtn onClick={() => handleClose()}>
        <Typography color="#e91e63">Cancel</Typography>
      </StyledBtn>

      <StyledBtn >
        <Typography color="#c8c8c8">Report</Typography>
      </StyledBtn>

    </DialogActions>
  );
};



export default PopupButtons;
