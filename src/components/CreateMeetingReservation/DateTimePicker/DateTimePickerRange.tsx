import React from "react";
//MUI Imports
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";
//date-fns Import
import { enUS } from 'date-fns/locale';


const DateTimeValidation = () => {
    const [startDateValue, setStartDateValue] = React.useState<Date  | null>(null);
    const [endDateValue, setEndDateValue] = React.useState<Date | null>(null);


    return (
        <>
            <Stack direction="row" marginTop="0.5rem" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
                        <DateTimePicker
                        views={["day", "hours", "minutes"]}
                        
                        renderInput={(props) => <TextField {...props}/>}
                        label="Start Time"
                        value={startDateValue}
                        onChange={(newValue) => {
                            if(newValue !== null) {
                                const addMinutes = new Date(newValue.getTime() + 50*60000);

                                setEndDateValue(addMinutes);
                            }

                            setStartDateValue(newValue)
                        } }
                        minutesStep={5}
                        minDate={new Date()}
                        minTime={new Date(0, 0, 0, 8)}
                        maxTime={new Date(0, 0, 0, 18, 45)}

                        />

                        <DateTimePicker

                        views={["day", "hours", "minutes"]}
                        renderInput={(props) => <TextField {...props} />}
                        label="End Time"
                        value={endDateValue}
                        minutesStep={5}
                        onChange={(newValue) => setEndDateValue(newValue)}
                        minDate={new Date()}
                        minTime={new Date(0, 0, 0, 8)}
                        maxTime={new Date(0, 0, 0, 18, 45)}

                        />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
                </LocalizationProvider>
            </Stack>
        </>
    );
}

export default DateTimeValidation;