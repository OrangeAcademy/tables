import Letters404 from './Letters';
import { MainContainer, StyledSubtitle } from './Partials/Main';
import { Button } from '@mui/material';

const PageNotFound = () => {
  const { history, location } = window;

  // if user first-entered the website with a broken link, then
  // onClick redirect user to homepage
  // -----------------else--------------------
  // if user navigated through other pages before
  // redirect user to the link one step back
  const redirectBack = () =>
    history.length <= 2 ? location.replace('/') : history.back();

  return (
    <MainContainer>
      <StyledSubtitle component="h3">oops! page not found</StyledSubtitle>
      <Letters404 />
      <StyledSubtitle mb="20px" component="h3">
        we are sorry, but the page you requested was not found
      </StyledSubtitle>
      <Button variant="outlined" size="large" onClick={redirectBack}>
        Go back
      </Button>
    </MainContainer>
  );
};

export default PageNotFound;
