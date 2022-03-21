import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridDay from '@fullcalendar/timegrid';
import {useDispatch, useSelector} from "react-redux";
import {eventsSelector} from "../../store/Event/selectors";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarStyle from "./Calendar.styles";
import {clearReservation} from "store/NewMeeting/newMeeting";

import {IEvent} from "../../models/Event";
import {clearSelectedEvent, setSelectedEvent} from "../../store/SelectedEvent/selectedEventSlice";

const Calendar = ({setSelectedIntervalFromPopup}:any) => {
    const eventsCalendar = useSelector(eventsSelector);

    const dispatch = useDispatch();
    const validTime = () => {
        return {start: new Date()};
    };

    const calculateDateDiff = (event: any) => {
        return dayjs(event.end).diff(dayjs(event.start), 'minutes')
    }

    const renderEventContent = (arg: any) => {
        let direction = calculateDateDiff(arg.event) <= 30 ? 'row' : 'column';
        return (
            <Box sx={{flexDirection: direction}}>
                <b>{arg.event.extendedProps.subject}</b>
                <span>{arg.event.extendedProps.userEmail}</span>
            </Box>
        )
    };

        const selectEvent = (info: any) => {
        if(new Date(info.startStr) > new Date()){
            dispatch(clearSelectedEvent({}))
            dispatch(clearReservation({}));
            setSelectedIntervalFromPopup({start: info.startStr, end: info.endStr})
        }
    }

    const handleEventClick = (arg:any) => {
        let extendedProps = arg.event.extendedProps;
        let event: IEvent = {
            userEmail: extendedProps.userEmail,
            subject: extendedProps.subject,
            start: dayjs(arg.event.start).format(),
            end: dayjs(arg.event.end).format(),
            attendees: extendedProps.attendees,
            agenda: [],
            presenters: extendedProps.presenters,
            id: extendedProps._id
        };
        dispatch(setSelectedEvent(event));
    }

    return (
        <CalendarStyle>
            <FullCalendar
                selectable
                unselectAuto={false}
                selectMirror
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
                // slotMaxTime="18:00:01"
                dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
                slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
                events={eventsCalendar}
                eventContent={renderEventContent}
                expandRows={false}
                select={selectEvent}
                eventClick={handleEventClick}
            />
        </CalendarStyle>
    );
}


export default Calendar;
