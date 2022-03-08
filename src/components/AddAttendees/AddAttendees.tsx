import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box , Divider, IconButton, Input, Table, TableBody, TableCell, TableHead, Typography, TableRow, styled} from '@mui/material';
import { Close, Done } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";


// Redux Imports
import { store, RootState } from '../../app/store/store';
import { addMeetingAttendee, IAttendeeRedux, removeMeetingAttendee } from "../../app/slices/meetingAttendeesSlice";
import { useSelector } from "react-redux";


interface IProps {
  showAttendees: boolean;
  setShowAttendees: (val: boolean) => void;
}

const AddAttendeeBtn = ({ addAttendee }: any) => {
  const AddButton = styled(IconButton)({
    color: '#000099',
  });

  return (
    <AddButton onClick={addAttendee}>
      <Done />
    </AddButton>
  );
};

const RemoveAttendeeBtn = ({handleClearFields}: any) => {
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
      <AddCircleOutlineIcon fontSize="inherit" />
    </Btn>
  );
};

const ActionButton = styled(Button)({
  width: '50%',
});

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

const AttendeesList = ({attendee,removeAttendee}: any) => {
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



export default function AddAttendees({ showAttendees, setShowAttendees }: IProps) {
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
              <AttendeesList attendee={attendeeStored.attendee} key={attendeeIndex} addAttendee={addAttendee} removeAttendee={() => removeAttendee(attendeeStored.r_id)} ></ AttendeesList>
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
