// MUI Imports
import { Typography, useMediaQuery, useTheme } from '@mui/material';

// Local imports
import {StyledBtnWithText, StyledIconBtn} from './Partials/ReportIssueBtn';
import StyledIcon from './Partials/ReportIssueBtnIcon';

// Props validation
interface props {
  handleClickOpen: () => void
}


/* ------------------ Main Component -------------------- */
/*

 Button that triggers the popup for Reporting an Issue

*/

const ReportIssueButton = ({ handleClickOpen }: props) => {
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {showText
        ? 
          <StyledBtnWithText variant="contained" startIcon={<StyledIcon />}  onClick={() => handleClickOpen()}>  
            <Typography color="black" fontSize="clamp(12px, 1rem, 1.2rem) ">Report an issue</Typography>
          </StyledBtnWithText>
        : 
          <StyledIconBtn  onClick={() => handleClickOpen()}>
            <StyledIcon />
          </StyledIconBtn>
      }
    </>
  );
};



export default ReportIssueButton;
