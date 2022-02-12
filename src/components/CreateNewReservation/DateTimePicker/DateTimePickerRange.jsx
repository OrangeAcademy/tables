import React from 'react';
//MUI Imports
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';
//date-fns Import
import { ru } from 'date-fns/locale';

const DateTimeValidation = () => {
    const [startDateValue, setStartDateValue] = React.useState(new Date());
    const [endDateValue, setEndDateValue] = React.useState(new Date());

    return (
        <>
            <Stack direction="row" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                    <DateTimePicker
                        renderInput={(params) => <TextField {...params} />}
                        label="Start time"
                        value={startDateValue}
                        onChange={(startDateValue) => {
                            setStartDateValue(startDateValue);
                            setEndDateValue(startDateValue);
                        }}
                        minDateTime={new Date()}
                    />
                    <DateTimePicker
                        renderInput={(params) => <TextField {...params} />}
                        label="End time"
                        value={endDateValue}
                        onChange={(endDateValue) => {
                            setEndDateValue(endDateValue);
                        }}
                        minDateTime={startDateValue}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>

                </LocalizationProvider>

            </Stack>
        </>
    );
}

export default DateTimeValidation();