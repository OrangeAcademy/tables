import React, {useEffect} from "react";
//MUI Imports
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
//date-fns Import
import {enUS} from 'date-fns/locale';
import {useDispatch, useSelector} from "react-redux";
import {setEndTime, setStartTime} from "../../../store/NewMeeting/newMeeting";
import {format, add} from 'date-fns';
import {addMinutes} from "date-fns";
import {meetingsDurationSelector, meetingSelector} from "../../../store/NewMeeting/selectors";
import dayjs from "dayjs";


const DateTimeValidation = () => {
  const formatDate = format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss');
  const [startDateValue, setStartDateValue] = React.useState<Date | null>(null);
  const [endDateValue, setEndDateValue] = React.useState<Date | null>(null);
  const duration = useSelector(meetingsDurationSelector);
  const {start} = useSelector(meetingSelector);
  const dispatch = useDispatch();

  const handleTime = (newValue: Date | null) => {

    // console.log('newValue', newValue && format(newValue, 'dd/MM/yyyy HH:mm'));
    // console.log('start', start, 'duration', duration);
    newValue && dispatch(setStartTime(format(newValue, 'yyyy-MM-dd\'T\'HH:mm:ss')));
    setStartDateValue(newValue)
  };

  const handleTimeEnd = (newValue: Date | null) => {
    newValue && dispatch(setEndTime(format(newValue, 'yyyy-MM-dd\'T\'HH:mm:ss')));
    setEndDateValue(newValue)
  }
  useEffect(() => {
    if (start && duration) {
      // console.log('start', start);
      // console.log('duration', duration);
      // console.log('add',format(addMinutes(new Date(start),duration), 'dd/MM/yyyy HH:mm'));
      dispatch(setEndTime(format(addMinutes(new Date(start), duration), 'yyyy-MM-dd\'T\'HH:mm:ss')));
      setEndDateValue( new Date(startDateValue!.getTime() + duration*60000));
    }
    return

  }, [start, duration]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
          <DateTimePicker
            value={startDateValue}
            renderInput={(params) => <TextField {...params} />}
            label="Start time"
            onChange={handleTime}
            // minDateTime={new Date()}
          />
          {!duration
            ? <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              label="End time"
              value={endDateValue}
              onChange={handleTimeEnd}
              // minDateTime={new Date()}
            />
            : <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              label="End time"
              value={endDateValue}
              onChange={(endDateValue) => {
                setEndDateValue(endDateValue);
              }}
              // minDateTime={startDateValue}
            />
          }

        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
        </LocalizationProvider>
      </Stack>
    </>
  );
};

export default DateTimeValidation;
