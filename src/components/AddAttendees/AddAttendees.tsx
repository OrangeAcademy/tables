// React imports
import { useState } from "react";

// Redux Imports
import { setAttendee, removeAttende } from "store/NewMeeting/newMeeting";
import { useSelector, useDispatch } from "react-redux";
import { meetingsAttendeesSelector } from "store/NewMeeting/selectors";




// MUI Imports
import { useTheme } from '@mui/material/styles';
import { Box , Button, Dialog,  DialogActions,  DialogContent, DialogTitle, useMediaQuery, Divider, 
  IconButton, Input, Table, TableBody, TableCell, TableHead, Typography, TableRow, styled} from '@mui/material';
import { Close, Done, AddCircleOutline } from '@mui/icons-material';

// Local imports
import ErrorSnackbar from "./ErrorSnackbar";




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

const errorMessage = {
  email: "Invalid email! Please retry",
  duplicate: "Oh no, this email is already in the list"
}

export default function AddAttendees({ showAttendees, setShowAttendees }: IAddAttendeesProps) {
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));
  const attendeesStoredRedux = useSelector(meetingsAttendeesSelector);
  const [localAttendee, setLocalAttendee] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showDupeError, setShowDupeError] = useState(false);

  const dispatch = useDispatch();
  
  const handleClose = () => setShowAttendees(false);

  const handleAttendee = (event: React.ChangeEvent<{value: string}>) => setLocalAttendee(event.target.value);

  const handleClearFields = () => setLocalAttendee('');

  const emailValidationRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  const removeAttendee = (attendee: string) => {
    dispatch(removeAttende(attendee))

  }

  const closeEmailError = () => setShowEmailError(false);
  const closeDupeError = () => setShowDupeError(false);


  const addAttendee = () => {
    if(attendeesStoredRedux.includes(localAttendee)) {
      setShowDupeError(true);
      return;
    }

    if(!emailValidationRegex.test(localAttendee)) {
      setShowEmailError(true);
      return;
    } 

    dispatch(setAttendee(localAttendee));
    handleClearFields();

  }


  return (
    <>
    <Dialog fullScreen={hasReachedBp} open={showAttendees} onClose={handleClose}>
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
                <Input value={localAttendee} onChange={handleAttendee} placeholder="Attendee" />
              </TableCell>

            </TableRow>


            {!!attendeesStoredRedux.length && attendeesStoredRedux.map( (attendeeStored, attendeeIndex) => (
              <AttendeesList attendee={attendeeStored} key={attendeeIndex} removeAttendee={() => removeAttendee(attendeeStored)} ></ AttendeesList>
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
     <ErrorSnackbar visibility={showEmailError} message={errorMessage.email} setVisibility={closeEmailError} />
     <ErrorSnackbar visibility={showDupeError} message={errorMessage.duplicate} setVisibility={closeDupeError} />

    </>
  );
}