import {styled} from "@mui/material";

const CalendarStyle = styled('div')(() => ({
  '& .fc': {
    padding: '10px'
  },
  '& .fc-event': {
    cursor: 'pointer'
  },
  '& .fc-event-main': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
    '& .fc-event-main div': {
        display: 'flex',
        width: '100%'
    },
    '& .fc-event-main div b': {
        margin: '0 5px'
    },
    '& .fc-event-main div b.clipped': {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '60%'
    },
    '& .fc-event-main div span.clipped': {
        width: '40%',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
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

  height: '100vh',
  backgroundColor: '#f8e8d0'
}));

export default CalendarStyle;
