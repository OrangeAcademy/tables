import React, {useRef} from "react";
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

const Calendar = ({setSelectedIntervalFromPopup}: any) => {
    const eventsCalendar = useSelector(eventsSelector);

    const dispatch = useDispatch();
    const validTime = () => {
        return {start: new Date()};
    };

    const calculateDateDiff = (event: any) => {
        return dayjs(event.end).diff(dayjs(event.start), 'minutes')
    }

    const renderEventContent = (arg: any) => {
        let direction = calculateDateDiff(arg.event) <= 35 ? 'row' : 'column';
        return (
            <Box sx={{flexDirection: direction}}>
                <b className={direction === 'row' ? 'clipped' : ''}>{arg.event.extendedProps.subject}</b>
                <span className={direction === 'row' ? 'clipped' : ''}>{arg.event.extendedProps.userEmail}</span>
            </Box>
        )
    };

    const selectEvent = (info: any) => {
        if (new Date(info.startStr) > new Date()) {
            dispatch(clearSelectedEvent({}))
            dispatch(clearReservation({}));
            setSelectedIntervalFromPopup({start: info.startStr, end: info.endStr})
        }
    }

    const handleEventClick = (arg: any) => {
        unselectIntervalTime();
        let extendedProps = arg.event.extendedProps;
        let event: IEvent = {
            userEmail: extendedProps.userEmail,
            subject: extendedProps.subject,
            start: dayjs(arg.event.start).format(),
            end: dayjs(arg.event.end).format(),
            attendees: extendedProps.attendees,
            agenda: [],
            presenters: extendedProps.presenters,
            id: extendedProps._id,
            elementId: extendedProps.elementId
        };
        dispatch(setSelectedEvent(event));
    }

    const selectOverlap = (arg: any) => {
        return arg.rendering === 'background';
    }

    const selectAllowFunction = (arg: any) => {
        const date1 = dayjs(arg.endStr)
        return date1.diff(arg.startStr, 'hour', true) <= 1
    }

    let calendarRef = useRef<FullCalendar | null>(null);

    const unselectIntervalTime = () => {
        let calendarApi = calendarRef?.current?.getApi();
        calendarApi?.unselect();
    }
    return (
        <CalendarStyle>
            <FullCalendar
                ref={calendarRef}
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
                selectOverlap={selectOverlap}
                selectAllow={selectAllowFunction}
            />
        </CalendarStyle>
    );
}


export default Calendar;
