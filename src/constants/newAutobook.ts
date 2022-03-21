import dayjs from "dayjs";
import { NewMeeting } from "store/NewMeeting/newMeeting";

// Returns a new meeting object for automatically booking a meeting
export const newReservationTemplate = (_getDuration: number): NewMeeting => ({
  userEmail: 'admin@orange.md',
  elementId: +new Date(),
  subject: 'Meeting at {time}',
  topic: 'Meeting at {time}',
  presenter: 'admin@orange.md',
  start: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
  end: _getDuration ? dayjs().add(_getDuration, "minute").format('YYYY-MM-DDTHH:mm:ss') : "",
  attendees: [],
  presenters: [],
});