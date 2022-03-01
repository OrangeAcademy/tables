import { DialogContent, styled } from "@mui/material";


/* --------------------- Styled Component --------------------- */
/*

  Used as content container in 'Report issue' popup. 

*/

export const ContentContainer = styled(DialogContent, {
  name: 'ReportIssueContentContainer'
})(({theme}) => ({
  padding: '20px 24px',
  [theme.breakpoints.down('tablet')]: {
    padding: "10px 20px 0px 5px"
  }
}))
