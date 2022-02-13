import Letters from './Letters';
import { MainContainer, StyledSubtitle } from './Partials/Main';
import { Button } from '@mui/material';

const PageNotFound = () => {
  const redirectBack = () => window.history.back();
  return (
    <MainContainer>
      <StyledSubtitle component="h3">oops! page not found</StyledSubtitle>
      <Letters />
      <StyledSubtitle mb="20px" component="h3">
        we are sorry, but the page you requested was not found
      </StyledSubtitle>
      <Button variant="outlined" onClick={redirectBack}>
        Go back
      </Button>
    </MainContainer>
  );
};

export default PageNotFound;
