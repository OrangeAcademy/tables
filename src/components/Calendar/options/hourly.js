import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";


export const START_WORKING_TIME = "08:00";
export const END_WORKING_TIME = "21:00";
export const LONG = "long";
export const SHORT = "short";
export const NUMERIC = "numeric";
export const TWO_DIGIT = "2-digit";
export const LOWERCASE = "lowercase";
export const Events = [{date: new Date()}];
export const DAY_DATE_FORMAT = "EEEE, d MMM, yyyy";
export const businessHours = {
    daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
    startTime: START_WORKING_TIME,
    endTime: END_WORKING_TIME
};

export const titleFormat = {
    month: SHORT,
    year: NUMERIC,
    day: NUMERIC,
    weekday: LONG
};
export const slotLabelFormat = {
    hour: NUMERIC,
    minute: NUMERIC,
    meridiem: SHORT,
    hour12: false
};
export const eventTimeFormat = {
    hour: TWO_DIGIT,
    minute: TWO_DIGIT,
    meridiem: false,
    hour12: false
};

export const dayHeaderFormat = {
    weekday: LONG
};

export const calendarProps = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],

    initialView: "timeGridDay",
    initialDate: new Date(),
    firstDay: 1,
    allDaySlot: false,
    displayEventEnd: true,
    displayEventTime: true,
    eventOverlap: false,
    eventTimeFormat: eventTimeFormat,
    unselectAuto: false,
    dayHeaders: false,
    dayHeaderFormat: dayHeaderFormat,
    businessHours: businessHours,
    nowIndicator: true,
    eventResizableFormStart: true,
    selectable: true,
    selectMirror: true,
    selectOverlap: false,
    slotLabelFormat: slotLabelFormat,
    slotMinTime: START_WORKING_TIME,
    slotMaxTime: END_WORKING_TIME,
    weekends: true,
    slotDuration: "00:30:00"

};