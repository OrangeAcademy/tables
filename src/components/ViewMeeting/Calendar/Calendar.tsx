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
import {useDispatch, useSelector} from "react-redux";
import {IEvent} from "../../../models/Event";
import {useAppSelector} from "../../../hooks/redux";
import {setSelectedEvent} from "../../../store/SelectedEvent/selectedEventSlice"
dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);

interface ISelectedInterval {
    start: string,
    end: string
}

const Calendar = ({getNextEventFunction}: any) => {

    const eventsCalendar = useSelector(eventsSelector);
    const [visibility, setVisibility] = useState<boolean>(false);
    const [selectedInterval, setSelectedInterval] = useState<ISelectedInterval>({
        start: "",
        end: ""
    });
    const dispatch = useDispatch();
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

    const selectEvent = (info: any) => {
        if (new Date(info.startStr) > new Date()) {
            setSelectedInterval({start: info.startStr, end: info.endStr})
            setVisibility(!visibility);
        }
    }

    const handleEventClick = (arg: any) => {

        let extendedProps = arg.event.extendedProps;
        let event: IEvent = {
            userEmail: extendedProps.userEmail,
            subject: extendedProps.subject,
            start: dayjs(arg.event.start).format(),
            end: dayjs(arg.event.end).format(),
            attendees: extendedProps.attendees,
            agenda: [],
            presenters: extendedProps.presenters,
            id: extendedProps.elementId,
            elementId: extendedProps.elementId
        };
        dispatch(setSelectedEvent(event));
        setVisibility(!visibility);
    }

    const selectOverlap = (arg:any) => {
        return arg.rendering === 'background';
    }

    return (
        <>
            <CalendarStyle sx={{width: {mobile: '100%', tablet: '40%'}}}>
                <FullCalendar
                    selectable
                    selectMirror
                    unselectAuto={false}
                    plugins={[timeGridDay, interactionPlugin]}
                    initialView="timeGridDay"
                    headerToolbar={false}
                    nowIndicator
                    height={'100vh'}
                    slotDuration="00:15:00"
                    eventOverlap={false}
                    scrollTime={dayjs().format('HH:mm:ss')}
                    allDaySlot={false}
                    eventClick={handleEventClick}
                    slotMinTime={"08:00"}
                    slotMaxTime={"18:00:01"}
                    dayHeaderFormat={{weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'}}
                    slotLabelFormat={{hour: '2-digit', minute: '2-digit', hour12: false}}
                    events={eventsCalendar}
                    displayEventTime={false}
                    eventContent={renderEventContent}
                    expandRows
                    select={selectEvent}
                    selectOverlap={selectOverlap}
                />
            </CalendarStyle>

            {visibility &&
            <CreateNewReservationPopup
              setVisibility={setVisibility}
              visibility={visibility}
              getNextEventFunction={getNextEventFunction}
              selectedInterval={selectedInterval}
            />}
        </>
    );
}

export default Calendar;
