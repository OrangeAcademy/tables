import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridDay from '@fullcalendar/timegrid';

const Calendar = () => {
  const validTime = () => ({ start: new Date() });

  return (
    <FullCalendar
    plugins={[timeGridDay]}
    initialView="timeGridDay"
    headerToolbar={false}
    nowIndicator
    allDaySlot={false}
    slotMinTime={"08:00"}
    slotMaxTime={"18:00:01"}
    dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
    slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
    displayEventTime={false}
    expandRows
  />

  );
};

export default Calendar;
