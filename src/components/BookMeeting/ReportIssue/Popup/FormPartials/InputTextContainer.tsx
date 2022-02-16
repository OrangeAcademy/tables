import React from "react";
// MUI Imports
import { Container } from '@mui/material';

// Styles
const containerStyles = { display: 'flex', alignItems: 'center' };

// Hard-typed props
interface props {
  children?: JSX.Element | JSX.Element[]
}

// Used in report issue form for select field
// Sets the text + icon to be on same level
const InputTextContainer = ({ children }: props) => {
  return (
    <Container disableGutters={true} sx={{ ...containerStyles }}>
      {children}
    </Container>
  );
};

export default InputTextContainer;
