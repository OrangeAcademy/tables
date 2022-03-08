// React imports
import { useState } from "react";

// Redux Imports
import { store, RootState } from '../../app/store/store';
import { addMeetingAttendee, IAttendeeRedux, removeMeetingAttendee } from "../../app/slices/meetingAttendeesSlice";
import { useSelector } from "react-redux";


// MUI Imports
import { useTheme } from '@mui/material/styles';
import { Box , Button, Dialog,  DialogActions,  DialogContent, DialogTitle, useMediaQuery, Divider, 
  IconButton, Input, Table, TableBody, TableCell, TableHead, Typography, TableRow, styled} from '@mui/material';
import { Close, Done, AddCircleOutline } from '@mui/icons-material';






interface IAddAttendeeBtn {
  addAttendee: () => void
}

const AddAttendeeBtn = ({ addAttendee }: IAddAttendeeBtn) => {
  const AddButton = styled(IconButton)({
    color: '#000099',
  });

  return (
    <AddButton onClick={addAttendee}>
      <Done />
    </AddButton>
  );
};

interface IRemoveAttendeeBtn {
  handleClearFields: () => void
}

const RemoveAttendeeBtn = ({handleClearFields}: IRemoveAttendeeBtn) => {
  const RemoveButton = styled(IconButton)({
    color: '#cd3a12',
  });

  return (
    <RemoveButton onClick={handleClearFields}>
      <Close />
    </RemoveButton>
  );
};

const CircleButton = () => {
  const Btn = styled(IconButton)({
    color: '#000099',
  });

  return (
    <Btn size="large">
      <AddCircleOutline fontSize="inherit" />
    </Btn>
  );
};


const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  pl: '0.5rem',
  pr: '0.6rem',
});

const Title = styled(DialogTitle)({
  fontSize: '1.8rem',
  fontWeight: 600,
});

const TableHeadStyled = () => {

  return (
    <TableHead>
      <TableRow>

        <TableCell>Add/Remove</TableCell>
        <TableCell>Attendee</TableCell>

      </TableRow>
    </TableHead>
  );
};


const NoAttendees = () => {

  const Text = styled('p')({
    display: 'flex',
    margin: '1rem 0 0 0',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 400,
    justifyContent: 'center'
  });

  return (  
    <Box>
      <Text>No attendees yet.</Text>
    </Box>
  );
}

interface IAttendeeList {
  attendee: string,
  removeAttendee: () => void
}

const AttendeesList = ({attendee,removeAttendee}: IAttendeeList) => {
  return (
    <TableRow>
      <TableCell>
        <RemoveAttendeeBtn handleClearFields={removeAttendee} />
      </TableCell>

      <TableCell>
        <Typography>{attendee}</Typography>
      </TableCell>

  </TableRow>
  )
}

interface IAddAttendeesProps {
  showAttendees: boolean;
  setShowAttendees: (val: boolean) => void;
}

export default function AddAttendees({ showAttendees, setShowAttendees }: IAddAttendeesProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const attendeesStoredRedux = useSelector( (state: RootState) => state.meetingAttendees.attendees)
  const [attendee, setAttendee] = useState('');
  
  const handleClose = () => setShowAttendees(false);

  const handleAttendee = (event: React.ChangeEvent<{value: string}>) => setAttendee(event.target.value);

  const handleClearFields = () => setAttendee('');

  const removeAttendee = (r_id: string) => {
    store.dispatch(removeMeetingAttendee({
      r_id,
      attendee
    }))
  }

  const addAttendee = () => {
    if(attendee) {
      store.dispatch(addMeetingAttendee({attendee}))
      setAttendee('');
    }

  }


  return (
    <Dialog fullScreen={fullScreen} open={showAttendees} onClose={handleClose}>
      <HeaderContainer>
        <Title>Add attendees</Title>
        <CircleButton />
      </HeaderContainer>

      <DialogContent>
        <Table stickyHeader={true}>
          <TableHeadStyled />
          <TableBody>
            <TableRow>
              <TableCell>
                <AddAttendeeBtn addAttendee={addAttendee}  />
                <RemoveAttendeeBtn handleClearFields={handleClearFields} />
              </TableCell>

              <TableCell>
                <Input value={attendee} onChange={handleAttendee} placeholder="Attendee" />
              </TableCell>

            </TableRow>


            {!!attendeesStoredRedux.length && attendeesStoredRedux.map( (attendeeStored: IAttendeeRedux, attendeeIndex) => (
              <AttendeesList attendee={attendeeStored.attendee} key={attendeeIndex} removeAttendee={() => removeAttendee(attendeeStored.r_id)} ></ AttendeesList>
              ))}
          
          </TableBody>
        </Table>
              {!attendeesStoredRedux.length && <NoAttendees />}
      </DialogContent>

      <Divider />

      <DialogActions>
        <Button fullWidth onClick={handleClose} variant="contained">
          Confirm and Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
