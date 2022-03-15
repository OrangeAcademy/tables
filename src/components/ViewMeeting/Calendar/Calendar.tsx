import React, {useState} from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import FullCalendar from '@fullcalendar/react';
import timeGridDay from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import CalendarStyle from "./Calendar.styles";
import CreateNewReservationPopup from "../../CreateNewReservation/PopUpReservation/CustomPopup";
import isBetween from "dayjs/plugin/isBetween"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
import {eventsSelector} from "../../../store/Event/selectors";
import {useSelector} from "react-redux";
import {IEvent} from "../../../models/Event";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

const Calendar = ({getNextEventFunction}: any) => {

  const eventsCalendar = useSelector(eventsSelector);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | undefined>(undefined);

  const calculateDateDiff = (event: any) => {
    return dayjs(event.end).diff(dayjs(event.start), 'minutes')
  }

  const renderEventContent = (arg: any) => {
    let direction = calculateDateDiff(arg.event) <= 35 ? 'row' : 'column';
    return (
      <Box sx={{flexDirection: direction}}>
        <b>{arg.event.extendedProps.subject}</b>
        <span>{arg.event.extendedProps.userEmail}</span>
      </Box>
    )
  };

  const handleClick = (arg: any) => {
    if (arg.date > new Date()) {
      setSelectedEvent(undefined);
      setVisibility(!visibility);
    }
  }

  const handleEventClick = (arg: any) => {
    let extendedProps = arg.event.extendedProps;
    let event: IEvent = {
      userEmail: extendedProps.userEmail,
      subject: extendedProps.subject,
      start: arg.event.start,
      end: arg.event.end,
      attendees: extendedProps.attendees,
      agenda: [],
      presenters: extendedProps.presenters,
      id: extendedProps._id
    };
    setSelectedEvent(event);
    setVisibility(!visibility);
  }

  return (
    <>
      <CalendarStyle sx={{width: {mobile: '100%', tablet: '40%'}}}>
        <FullCalendar
          selectable
          plugins={[timeGridDay, interactionPlugin]}
          initialView="timeGridDay"
          headerToolbar={false}
          nowIndicator
          height={'100vh'}
          eventMinHeight={30}
          slotDuration="00:15:00"
          eventShortHeight={30}
          eventOverlap={false}
          allDaySlot={false}
          eventClick={handleEventClick}
          // slotMinTime={"08:00"}
          dateClick={handleClick}
          // slotMaxTime={"18:00:01"}
          dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
          slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
          events={eventsCalendar}
          displayEventTime={false}
          eventContent={renderEventContent}
          expandRows
        />
      </CalendarStyle>

      {visibility &&
      <CreateNewReservationPopup
        setVisibility={setVisibility}
        visibility={visibility}
        existingEvent={selectedEvent}
        getNextEventFunction={getNextEventFunction}
      />}
    </>
  );
}

export default Calendar;
