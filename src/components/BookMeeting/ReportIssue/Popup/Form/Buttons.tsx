// MUI Imports
import { DialogActions, Button, styled, Typography } from '@mui/material';

// Redux imports
import { store } from "../../../../../pages/store/store";
import { addReport } from "../../../../../pages/store/slices/reportIssueSlice";


// Props validation
interface IPopupProps {
  submitReport: () => void,
  handleClose: () => void
}



/* ------------------------ Component ------------------------ */
/* 
 Contains 'Report' and 'Cancel' buttons for the Report Issue Popup. 
*/
const PopupButtons = ({ submitReport, handleClose }: IPopupProps) => {
  


  // Button style for 'Cancel' and 'Report' buttons
  const StyledBtn = styled(Button)(({theme}) => ({
    width: "auto",
    [theme.breakpoints.down('tablet')]: {
      width: "50%"
    }
  }))

  return (
    <DialogActions>

      <StyledBtn onClick={handleClose}>
        <Typography color="#e91e63">Cancel</Typography>
      </StyledBtn>

      <StyledBtn onClick={submitReport}>
        <Typography color="#c8c8c8">Report</Typography>
      </StyledBtn>

    </DialogActions>
  );
};



export default PopupButtons;
