import React from "react";
import FullCalendar from "@fullcalendar/react";
import { calendarProps, DAY_DATE_FORMAT } from "./options/hourly";
import { format } from "date-fns";
import timeGridDay from '@fullcalendar/timegrid';

const Calendar = () => {
  const validTime = () => ({ start: new Date() });

  return (

    // <FullCalendar
    //   titleFormat={({ date }) => {
    //     return format(date.marker, DAY_DATE_FORMAT);
    //   }}
    //   validRange={validTime}
    //   {...calendarProps}
    // />
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
