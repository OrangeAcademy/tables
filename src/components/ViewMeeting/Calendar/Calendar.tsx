import React, {useState} from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import FullCalendar from '@fullcalendar/react';
import timeGridDay from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import CalendarStyle from "./Calendar.styles";
import CustomPopup from "../../CreateNewReservation/PopUpReservation/CustomPopup";
import {Grid} from "@mui/material";
import Inputs from "../../Inputs/Inputs";
import PopupCalendar from "../../Calendar/Calendar";

export interface IEvent {
  title: string,
  start: string,
  end: string,
  author: string
}

const eventsCalendar: IEvent[] = [
  {
    title: 'Event 1',
    start: dayjs().hour(14).minute(30).second(0).format(),
    end: dayjs().hour(15).minute(30).second(0).format(),
    author: 'Natalia Melciciuc'
  },
  {
    title: 'Event 2',
    start: dayjs().hour(16).minute(30).second(0).format(),
    end: dayjs().hour(16).minute(45).second(0).format(),
    author: 'Natalia Melciciuc'
  }
];

const Calendar = () => {

  const calculateDateDiff = (event: any) => {
    return dayjs(event.end).diff(dayjs(event.start), 'minutes')
  }

  const renderEventContent = (arg: any) => {
    let direction = calculateDateDiff(arg.event) <= 30 ? 'row' : 'column';
    return (
      <Box sx={{flexDirection: direction}}>
        <b>{arg.event.title}</b>
        <span>{arg.event.extendedProps.author}</span>
      </Box>
    )
  };
  const handleClick = () => {
    setVisibility(!visibility);
  }
  const [visibility, setVisibility] = useState<boolean>(false);

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
          allDaySlot={false}
          slotMinTime={"08:00"}
          dateClick={handleClick}
          slotMaxTime={"20:00:01"}
          dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
          slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
          events={eventsCalendar}
          displayEventTime={false}
          eventContent={renderEventContent}
          expandRows
        />
      </CalendarStyle>

      {visibility &&
      <CustomPopup title="Book a meeting" onClose={setVisibility} show={visibility}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7} lg={7}>
            <Inputs/>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <PopupCalendar />
          </Grid>
        </Grid>
      </CustomPopup>}
    </>
  );
}

export default Calendar;