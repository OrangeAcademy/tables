import React from "react";
import FullCalendar from "@fullcalendar/react";
import {calendarProps,DAY_DATE_FORMAT} from "./options/hourly";
import {format} from "date-fns";

const Calendar = () => {
    const validTime = () => {
        return {start: new Date()};
    };
    return (
        <div >
            <FullCalendar
                titleFormat={({date}) => {
                    return format(date.marker, DAY_DATE_FORMAT);
                }}
                validRange={validTime}
                {...calendarProps}/>

        </div>
    );
};


export default Calendar;