// MUI Imports
import { Container } from '@mui/material';

// Used in form for select fields
// Sets the text + icon to be on same level
const InputTextContainer = ({ children }) => {
  return (
    <Container
      disableGutters={true}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      {children}
    </Container>
  );
};

export default InputTextContainer;
