import React, { useEffect } from "react";
//MUI Imports
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
//date-fns Import
import { enUS } from 'date-fns/locale';

import { useDispatch, useSelector } from "react-redux";
import {setStartTime, setEndTime} from "store/NewMeeting/newMeeting";
import { format } from "date-fns";
import { meetingsDurationSelector } from "store/NewMeeting/selectors";
import { useMediaQuery, useTheme } from "@mui/material";



interface IChosenMeetingDateTime {
    chosenDateTime?: Date
}

interface IChosenMeetingLength {
    preferredMeetLengthMins?: number,
}
export interface IDateTimeValidation extends IChosenMeetingDateTime, IChosenMeetingLength {
  
}

const DateTimeValidation = () => {
    const theme = useTheme();
    const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'))

    const [startDateValue, setStartDateValue] = React.useState<Date | null>(null);
    const [endDateValue, setEndDateValue] = React.useState<Date| null>(null);
    const prefferedLength = useSelector(meetingsDurationSelector) || 30;
    const dispatch = useDispatch();

    const handleEnd =  (timeValue: Date | null) =>  setEndDateValue(timeValue)

    const handleStart = (timeValue: Date | null) => {
        if(timeValue !== null) {
            const addMinutes = new Date(timeValue.getTime() + prefferedLength*60000);
            setEndDateValue(addMinutes);
        }

        setStartDateValue(timeValue)
    }

    const roundStart = () => {
        const coeff = 1000 * 60 * 5;
        const date = new Date();  //or use any other date
        const rounded = new Date(Math.round(date.getTime() / coeff) * coeff)
        const addMinutesEnd = new Date(rounded.getTime() + (15 +prefferedLength)*60000);
        const addMinutesStart = new Date(rounded.getTime() + 15 *60000);
        setStartDateValue(addMinutesStart);
        setEndDateValue(addMinutesEnd);
    }

    useEffect(() => {
      if(startDateValue) dispatch(setStartTime(format(startDateValue, 'yyyy-MM-dd\'T\'HH:mm:ss')));
      if(endDateValue) dispatch(setEndTime(format(endDateValue, 'yyyy-MM-dd\'T\'HH:mm:ss')));
    }, [dispatch, endDateValue, startDateValue])

    useEffect(() => {


        roundStart();
    }, [])

    return (

            <Stack direction="row" marginTop="0.5rem" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
                        <DateTimePicker
                        views={["day", "hours", "minutes"]}
                        inputFormat={hasReachedBp ? "MMM dd, hh:mm" : "MMMM dd, hh:mm"}
                        renderInput={(props) => <TextField fullWidth {...props}/>}
                        label="Start Time"
                        value={startDateValue}
                        onChange={handleStart }
                        minutesStep={5}
                        minDate={new Date(new Date().getTime() + 15*60000)}
                        minTime={new Date(0, 0, 0, 8)}
                        maxTime={new Date(0, 0, 0, 18, 45)}
                        
                        />

                        <DateTimePicker
                        inputFormat={hasReachedBp ? "MMM dd, hh:mm" : "MMMM dd, hh:mm"}
                        views={["day", "hours", "minutes"]}
                        renderInput={(props) => <TextField fullWidth {...props} />}
                        label="End Time"
                        value={endDateValue}
                        minutesStep={5}
                        onChange={handleEnd}
                        minDate={new Date(new Date().getTime() + 30*60000)}
                        minTime={new Date(0, 0, 0, 8)}
                        maxTime={new Date(0, 0, 0, 18, 45)}

                        />
                </LocalizationProvider>

            </Stack>

    );
}

export default DateTimeValidation;