import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Divider, IconButton, Input, Table, TableBody, TableCell, TableHead, TableRow, Typography, styled} from '@mui/material';
import { Close, Done } from '@mui/icons-material';
import { Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from "react";

// Redux Imports
import { store } from '../../app/store/store';
import { addMeetings } from "../../app/slices/meetingTopicsSlice";

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
  const RowTitle = styled(Typography)({
    fontSize: '1rem',
  });

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <RowTitle>Edit/Remove</RowTitle>
        </TableCell>

        <TableCell>
          <RowTitle>Topic</RowTitle>
        </TableCell>

        <TableCell>
          <RowTitle>Presenter</RowTitle>
        </TableCell>
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
  <TableRow>
    <Text>No agenda yet.</Text>
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

interface ITopic {
  presenter: string,
  topic: string
}

type MeetingTopics = ITopic[] | [];

export default function AddTopic({ showAgenda, setShowAgenda }: IProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [topic, setTopic] = useState('');
  const [presenter, setPresenter] = useState('');
  const [allTopics, setAllTopics] = useState<MeetingTopics>([]);

  const handleClose = () => setShowAgenda(false);

  const handleTopic = (event: React.ChangeEvent<{value: string}>) => setTopic(event.target.value);
  const handlePresenter = (event: React.ChangeEvent<{value: string}>) => setPresenter(event.target.value);
  const addTopic = () => {
    if(topic && presenter) {
      setAllTopics([...allTopics, { topic , presenter }]);
      setTopic('');
      setPresenter('');
    }
  }

  const handleClearFields = () => {
    setTopic('');
    setPresenter('');
  }

  const removeTopic = (topicIndex: number) => {
    const newTopicsArr = allTopics.filter((_, id) => topicIndex !== id);
    setAllTopics(newTopicsArr);
  }

  const storeTopics = (event: React.MouseEvent) => {
    if(allTopics.length) {
      store.dispatch(addMeetings({
        // type: 'addMeetings',
        payload: {
          allTopics
        }
      }))
    } else {
      event.preventDefault();
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

            {!allTopics.length && <NoAgenda />}

            {allTopics && allTopics.map((topic, topicIndex) => (
              <Topic topic={topic.topic} presenter={topic.presenter} addTopic={addTopic} removeTopic={() => removeTopic(topicIndex)} ></Topic>
            ))}
          
          </TableBody>
        </Table>
      </DialogContent>

      <Divider />

      <DialogActions>
        <ActionButton color="error" onClick={handleClose} variant="contained">
          Cancel
        </ActionButton>
        <Button  onClick={storeTopics} variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
