// Local imports
import Timer from '../components/BookMeeting/Timer/Timer';
import BackgroundContainer from '../components/BookMeeting/BackgroundContainer/Main';
import ReportIssue from '../components/BookMeeting/ReportIssue/Main';

const BookMeeting = () => {
  return (
    <BackgroundContainer>
      <Timer />
      <ReportIssue />
    </BackgroundContainer>
  );
};

export default BookMeeting;
