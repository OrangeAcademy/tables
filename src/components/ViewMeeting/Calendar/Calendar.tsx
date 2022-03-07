import React, {useEffect, useState} from "react";
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
import {useAppSelector} from "../../../redux/hooks/hooks";
import isBetween from "dayjs/plugin/isBetween"
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

const Calendar = () => {

  const eventsCalendar = useAppSelector((state) => state.events.events);
  const [visibility, setVisibility] = useState<boolean>(false);

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

  const handleClick = () => {
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
            <PopupCalendar/>
          </Grid>
        </Grid>
      </CustomPopup>}
    </>
  );
}

export default Calendar;
