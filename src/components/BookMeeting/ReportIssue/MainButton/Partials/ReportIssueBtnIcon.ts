import { styled } from '@mui/material';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';

// The Bell icon for the main report issue button
const StyledReportIssueIcon = styled(NotificationsNoneOutlined)({
  color: 'black',
  width: 'clamp(1.5rem, 1.4rem + 0.5vw, 2rem)',
  height: 'clamp(1.5rem, 1.4rem + 0.5vw, 2rem)'
});

export default StyledReportIssueIcon;
