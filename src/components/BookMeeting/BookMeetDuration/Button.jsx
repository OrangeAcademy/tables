// Local Imports
import StyledBtnText from './ButtonPartials/StyledBtnText';
import StyledButton from './ButtonPartials/StyledButton';

const BookMeetingBtn = ({ duration, setDuration, index }) => {
  return (
    <StyledButton onClick={() => setDuration(index)}>
      <StyledBtnText>{duration} min</StyledBtnText>
    </StyledButton>
  );
};

export default BookMeetingBtn;
