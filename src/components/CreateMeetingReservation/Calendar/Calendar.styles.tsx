import FullCalendar from "@fullcalendar/react";
import {Box, styled} from "@mui/material";

const CalendarStyle = styled(Box)(() => ({
  '& .fc': {
    padding: '10px'
  },
  '& .fc-event-main': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  '& .fc-event-main div': {
    display: 'inline-flex'
  },
  '& .fc-event-main div b': {
    margin: '0 5px'
  },
  '& .fc-timegrid-slots, & .fc-col-header': {
    background: '#f8e8d0'
  },
  '& .css-1kro4d2': {
    height: '100vh'
  },
  '& .fc-timegrid-slot-minor:hover, & .fc-timegrid-slot:hover': {
    cursor: 'pointer'
  },
  "& .css-1iyowbl": {
    backgroundColor: "transparent"
  },
  "#fc-dom-2": {
    fontSize: "1.35rem",
  },
  ".fc-scroller": {
    overflow: "hidden",
    background: "#f8e8d0"
  },
  "#fc-dom-6":{
    minWidth: "205px"
  },
  overflow: "-moz-hidden-unscrollable",
  height: '100%',
  maxHeight: "510px",
  minWidth: "max-content",
  backgroundColor: 'transparent'
}));

export default CalendarStyle;
