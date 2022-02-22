

// MUI Imports
import { Dialog, useTheme } from '@mui/material';
import { useMediaQuery } from "@mui/material";

//Local Imports
import PopupTitle from './PopupPartials/Title';
import PopupButtons from './PopupPartials/Buttons';
import PopupFormFields from './Form/Form';
import {ContentContainer} from "./PopupPartials/ContentContainer";

// MUST BE A PART OF DIFFERENT COMPONENT.
import AddTopic from "./PopupPartials/MY_COMPONENT";

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
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm')); // popup full screen = true when vw < 600px

  return (
    <Dialog open={open} fullScreen={fullScreen} onClose={handleClose} >
      {/* ---- Popup main body ---- */}
      <ContentContainer>
        <PopupTitle />
        <PopupFormFields />
      </ContentContainer>

      {/* ---- Popup buttons / footer  ---- */}
      <PopupButtons handleClose={handleClose} />

      {/* ---- TO BE REMOVED FROM HERE ---- */}
      <AddTopic />
    </Dialog>

  );
};

export default ReportIssuePopup;
