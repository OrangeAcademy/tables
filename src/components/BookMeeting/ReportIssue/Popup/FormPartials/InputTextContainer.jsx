// MUI Imports
import { Container } from '@mui/material';

// styles
const containerStyles = { display: 'flex', alignItems: 'center' };

// Used in report issue form for select field
// Sets the text + icon to be on same level
const InputTextContainer = ({ children }) => {
  return (
    <Container disableGutters={true} sx={{ ...containerStyles }}>
      {children}
    </Container>
  );
};

export default InputTextContainer;
