import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridDay from '@fullcalendar/timegrid';
import {useSelector} from "react-redux";
import {eventsSelector} from "../../store/Event/selectors";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarStyle from "./Calendar.styles";



const Calendar = () => {
const eventsCalendar = useSelector(eventsSelector);
  const validTime = () => {
    return { start: new Date() };
  };

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

    <CalendarStyle>
    <FullCalendar
      selectable={false}
      eventOverlap={false}
      plugins={[timeGridDay, interactionPlugin]}
      initialView="timeGridDay"
      slotDuration="00:15:00"
      validRange={validTime}
      weekends={true}
      scrollTime={dayjs().format('HH:mm:ss')}
      headerToolbar={{"end": 'prev,next'}}
      handleWindowResize={true}
      dayHeaders={true}
      nowIndicator
      height={"100%"}
      allDaySlot={false}
      displayEventTime={false}
      slotMinTime="08:00"
      slotMaxTime="18:00:01"
      dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
      slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
      events={eventsCalendar}
      eventContent={renderEventContent}
      expandRows={false}
    />

</CalendarStyle>
  );
}

export default Calendar;