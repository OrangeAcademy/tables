// Local imports
import Timer from '../components/BookMeeting/Timer/Timer';
import BackgroundContainer from '../components/BookMeeting/BackgroundContainer/Main';
import ReportIssue from '../components/BookMeeting/ReportIssue/Main';
import Title from '../components/BookMeeting/Title/Title';

const BookMeeting = () => {
  return (
    <BackgroundContainer>
      <Timer />
      < Title />
      <ReportIssue />
    </BackgroundContainer>
  );
};

export default BookMeeting;
