// Local imports
import Timer from '../components/BookMeeting/Timer/Main';
import BackgroundContainer from '../components/BookMeeting/BackgroundContainer/Main';
import ReportIssue from '../components/BookMeeting/ReportIssue/Main';
import Title from '../components/BookMeeting/Title/Main';
import MeetingDurationButtons from '../components/BookMeeting/BookMeetDuration/Main';
import ButtonMeeting from '../components/BookMeeting/ScheduleMeeting/ButtonMeeting';
const BookMeeting = () => {
  return (
    <BackgroundContainer>
      <Timer />
      <Title />
      <MeetingDurationButtons />
      <ButtonMeeting />
      <ReportIssue />
    </BackgroundContainer>
  );
};

export default BookMeeting;
