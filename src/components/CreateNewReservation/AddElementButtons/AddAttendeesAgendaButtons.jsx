import React from 'react';
//MUI Imports
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { styled } from '@mui/material/styles';

const AddAttendeesAgendaButtons = () => {
    const StyledButton = styled(Button)({
        fontWeight: 'bold',
        color: 'black',
        border: '1px solid rgb(211,211,211)',
    })

    return (
        <>
            <Stack direction="row" spacing={2}>
                <StyledButton variant="outlined" endIcon={<AddCircleOutlineIcon />}>
                    Add <br></br> Attendees
                </StyledButton>
                <StyledButton variant="outlined" endIcon={<FormatListBulletedIcon />}>
                    Add <br></br> Agenda
                </StyledButton>
            </Stack>
        </>
    );
}

export default AddAttendeesAgendaButtons;