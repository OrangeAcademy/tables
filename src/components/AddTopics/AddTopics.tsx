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
import { addMeetingTopic, ITopic, removeMeetingTopic } from "../../app/slices/meetingTopicsSlice";
import { nanoid } from '@reduxjs/toolkit';
import {useSelector} from "react-redux";


interface IProps {
  showAgenda: boolean;
  setShowAgenda: (val: boolean) => void;
}

const AddTopicBtn = ({ addTopic }: any) => {
  const AddButton = styled(IconButton)({
    color: '#000099',
  });

  return (
    <AddButton onClick={addTopic}>
      <Done />
    </AddButton>
  );
};

const RemoveTopicBtn = ({handleClearFields}: any) => {
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

        <TableCell>Edit/Remove</TableCell>
        <TableCell>Topic</TableCell>
        <TableCell>Presenter</TableCell>

      </TableRow>
    </TableHead>
  );
};

const NoAgenda = () => {

  const Text = styled(Typography)({
    display: 'flex',
    pt: '1rem',
    ml: '1rem',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 400,
  });

  return (  
    
  <TableRow >
    <TableCell variant='footer' >
      <Text>No agenda yet.</Text>
    </TableCell>
  </TableRow>
  );
}

const Topic = ({topic, presenter, removeTopic}: any) => {
  return (
    <TableRow>
      <TableCell>
        <RemoveTopicBtn handleClearFields={removeTopic} />
      </TableCell>

      <TableCell>
        <Typography>{topic}</Typography>
      </TableCell>

      <TableCell>
      <Typography>{presenter}</Typography>
      </TableCell>
  </TableRow>
  )
}



export default function AddTopic({ showAgenda, setShowAgenda }: IProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const topicsStoredRedux = useSelector( (state: RootState) => state.meetingTopics.presenters)
  const [topic, setTopic] = useState('');
  const [presenter, setPresenter] = useState('');
  
  const handleClose = () => setShowAgenda(false);

  const handleTopic = (event: React.ChangeEvent<{value: string}>) => setTopic(event.target.value);
  const handlePresenter = (event: React.ChangeEvent<{value: string}>) => setPresenter(event.target.value);

  const handleClearFields = () => {
    setTopic('');
    setPresenter('');
  }

  const removeTopic = (topicID: string) => {
    store.dispatch(removeMeetingTopic({
      payload: {
        topicID
      }
    }))
  }

  const addTopic = () => {
    if(topic && presenter) {
      store.dispatch(addMeetingTopic({
        payload: {
          topic,
          presenter,
          topicID: nanoid()
        }
      }))

      setTopic('');
      setPresenter('');
    }

  }


  return (
    <Dialog fullScreen={fullScreen} open={showAgenda} onClose={handleClose}>
      <HeaderContainer>
        <Title>Add topics</Title>
        <CircleButton />
      </HeaderContainer>

      <DialogContent>
        <Table stickyHeader={true}>
          <TableHeadStyled />
          <TableBody>
            <TableRow>
              <TableCell>
                <AddTopicBtn addTopic={addTopic}  />
                <RemoveTopicBtn handleClearFields={handleClearFields} />
              </TableCell>

              <TableCell>
                <Input value={topic} onChange={handleTopic} placeholder="Topic" />
              </TableCell>

              <TableCell>
                <Input value={presenter} onChange={handlePresenter} placeholder="Presenter" />
              </TableCell>
            </TableRow>

            {!topicsStoredRedux.length && <NoAgenda />}

            {!!topicsStoredRedux.length && topicsStoredRedux.map( (topicStored: ITopic, topicIndex) => (
              <Topic topic={topicStored.topic} key={topicIndex} presenter={topicStored.presenter} addTopic={addTopic} removeTopic={() => removeTopic(topicStored.topicID)} ></Topic>
            ))}
          
          </TableBody>
        </Table>
      </DialogContent>

      <Divider />

      <DialogActions>
        <ActionButton color="error" onClick={handleClose} variant="contained">
          Cancel
        </ActionButton>
        <ActionButton  onClick={() => handleClose()} variant="contained">
          Confirm
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
}
