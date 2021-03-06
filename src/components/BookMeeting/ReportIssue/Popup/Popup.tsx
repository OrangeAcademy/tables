
// MUI Imports
import { Dialog, useTheme } from '@mui/material';
import { useMediaQuery } from "@mui/material";

//Local Imports
import PopupTitle from './PopupPartials/Title';
import PopupFormFields from './Form/Form';
import {ContentContainer} from "./PopupPartials/ContentContainer";

// Props validation
interface IProps {
  open: boolean,
  handleClose: () => void
}


/* --------------- Main Component -------------------- */
/* 

 [EN] Component that constitutes (assembles) the report issue popup. 
 [RU] Компонент, который представляет собой (собирает) всплывающее окно отчета о проблеме.

*/

const ReportIssuePopup = ({ open, handleClose }: IProps) => {
  // Theme settings
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm')); // popup full screen = true when vw < 600px


  return (
    <Dialog open={open} fullScreen={fullScreen} onClose={handleClose} >
      <ContentContainer>
        <PopupTitle />
        <PopupFormFields handleClose={handleClose} />
      </ContentContainer>
    </Dialog>

  );
};

export default ReportIssuePopup;
