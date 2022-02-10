import {styled} from "@mui/material";

const CalendarStyle = styled('div')(() => ({
  '& .fc': {
    padding: '10px'
  },
  '& .fc-event-main': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  '& .fc-event-main div': {
    display: 'flex'
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

  height: '100vh',
  width: '40%',
  backgroundColor: '#f8e8d0'
}));

export default CalendarStyle;