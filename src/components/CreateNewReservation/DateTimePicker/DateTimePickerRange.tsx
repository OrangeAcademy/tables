import React, {useCallback, useEffect, useMemo} from "react";
//MUI Imports
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
//date-fns Import
import {enUS} from 'date-fns/locale';

import {useDispatch, useSelector} from "react-redux";
import {setStartTime, setEndTime} from "store/NewMeeting/newMeeting";
import {addMinutes, format} from "date-fns";
import {meetingsDurationSelector, meetingSelector} from "store/NewMeeting/selectors";
import {useMediaQuery, useTheme} from "@mui/material";
import {useAppSelector} from "../../../hooks/redux";

interface ISelectedInterval {
    start: string,
    end: string
}

interface IExistingEvent {
    selectedIntervalFromPopup?:ISelectedInterval,
    selectedInterval?: ISelectedInterval
}

const DateTimeValidation = ({ selectedIntervalFromPopup, selectedInterval}: IExistingEvent) => {
    const theme = useTheme();
    const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));

    const existingEvent = useAppSelector(state => state.selectedEvent.event);
    const [startDateValue, setStartDateValue] = React.useState<Date | null>(null);
    const [endDateValue, setEndDateValue] = React.useState<Date | null>(null);
    const prefferedLength = useSelector(meetingsDurationSelector) || 30;
    const dispatch = useDispatch();
    const handleEnd = (timeValue: Date | null) => setEndDateValue(timeValue);

    const handleStart = (timeValue: Date | null) => {
        setStartDateValue(timeValue);
        if (timeValue !== null) {
            const addMinutes = new Date(timeValue.getTime() + prefferedLength * 60000);
            setEndDateValue(addMinutes);
        }

    };
    const roundStart = useCallback(() => {
        const coeff = 1000 * 60 * 5;
        const date = new Date();  //or use any other date
        const rounded = new Date(Math.round(date.getTime() / coeff) * coeff);
        const addMinutesEnd = new Date(rounded.getTime() + (15 + prefferedLength) * 60000);
        const addMinutesStart = new Date(rounded.getTime() + 15 * 60000);
        setStartDateValue(addMinutesStart);
        setEndDateValue(addMinutesEnd);
    }, [prefferedLength]);

    useEffect(() => {
        if (startDateValue) dispatch(setStartTime(format(startDateValue, 'yyyy-MM-dd\'T\'HH:mm:ss')));
        if (endDateValue) dispatch(setEndTime(format(endDateValue, 'yyyy-MM-dd\'T\'HH:mm:ss')));
    }, [dispatch, endDateValue, startDateValue]);

    useEffect(() => {
        if (existingEvent.start) {
            setStartDateValue(new Date(existingEvent.start));
            setEndDateValue(new Date(existingEvent.end));
        }
        else if(selectedIntervalFromPopup?.start){
            setStartDateValue(new Date(selectedIntervalFromPopup?.start));
            setEndDateValue(new Date(selectedIntervalFromPopup?.end));
        }
        else if(selectedInterval?.start){
            setStartDateValue(new Date(selectedInterval?.start));
            setEndDateValue(new Date(selectedInterval?.end));
        }
        else {
            roundStart();
        }
    }, [roundStart, selectedIntervalFromPopup, existingEvent, selectedInterval?.start, selectedInterval?.end]);

    const {start} = useSelector(meetingSelector);
    const dateMin = useMemo(() => {
        if (start) {
            return new Date(start);

        } else {
            return new Date(new Date().getTime() + 30 * 60000);
        }
    }, [start]);
    const timeMin = useMemo(() => {
        if (start) {
            return addMinutes(new Date(new Date(start).getTime()), 15);

        } else {
            return new Date(0, 0, 0, 8);
        }
    }, [start]);
    return (
        <Stack direction="row" marginTop="0.5rem" spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
                <DateTimePicker
                    views={["day", "hours", "minutes"]}
                    inputFormat={hasReachedBp ? "MMM dd, H:mm" : "MMMM dd, H:mm"}
                    renderInput={props => {
                        if (props.inputProps) {
                            props.inputProps.readOnly = true;
                        }
                        return <TextField fullWidth {...props} />
                    }}
                    label="Start Time"
                    value={startDateValue}
                    onChange={handleStart}
                    disabled={!!existingEvent.start}
                    minutesStep={5}
                    // minDate={new Date(new Date().getTime() + 15 * 60000)}
                    // minTime={new Date(0, 0, 0, 8)}
                    // maxTime={new Date(0, 0, 0, 17, 45)}
                    //
                />

                <DateTimePicker
                    inputFormat={hasReachedBp ? "MMM dd, H:mm" : "MMMM dd, H:mm"}
                    views={["day", "hours", "minutes"]}
                    renderInput={props => {
                        if (props.inputProps) {
                            props.inputProps.readOnly = true;
                        }
                        return <TextField fullWidth {...props} />
                    }}
                    label="End Time"
                    value={endDateValue}
                    minutesStep={5}
                    onChange={handleEnd}
                    disabled={!!existingEvent.start}
                    minDate={dateMin}
                    minTime={timeMin}
                    maxTime={new Date(0, 0, 0, 18, 0)}

                />
            </LocalizationProvider>

        </Stack>

    );
};

export default DateTimeValidation;
