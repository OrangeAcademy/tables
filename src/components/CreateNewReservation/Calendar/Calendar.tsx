import dayjs from "dayjs";
import Box from "@mui/material/Box";
import FullCalendar from '@fullcalendar/react';
import timeGridDay from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import CalendarStyle from "./Calendar.styles";
import {useAppSelector} from "../../../redux/hooks/hooks";


const Calendar = () => {

  const eventsCalendar = useAppSelector((state) => state.events.events);

  const calculateDateDiff = (event: any) => {
    return dayjs(event.end).diff(dayjs(event.start), 'minutes')
  }

  const renderEventContent = (arg: any) => {
    let direction = calculateDateDiff(arg.event) <= 30 ? 'row' : 'column';

    return (
      <Box sx={{flexDirection: direction}}>
        <b>{arg.event.extendedProps.subject}</b>
        <span>{arg.event.extendedProps.attendees[0]}</span>
      </Box>
    )
  };



  return (

      <CalendarStyle >
        <FullCalendar
          selectable
          plugins={[timeGridDay, interactionPlugin]}
          initialView="timeGridDay"
          headerToolbar={false}
          nowIndicator
          height='100%'
          allDaySlot={false}
          slotMinTime="08:00"
          slotMaxTime="18:00:01"
          dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
          slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
          events={eventsCalendar}
          displayEventTime={false}
          eventContent={renderEventContent}
          expandRows
        />

      </CalendarStyle>

  );
}

export default Calendar;
