// React imports
import React, {useEffect, useState} from 'react';

// Redux Imports
import {setAgenda} from "store/NewMeeting/newMeeting";
import {useSelector, useDispatch} from "react-redux";
import {meetingsAgendaSelector} from "store/NewMeeting/selectors";

// MUI Imports
import {useTheme} from '@mui/material/styles';
import {
  Dialog, DialogActions, DialogContent, useMediaQuery, Divider, Input, Table, TableBody,
  TableCell, TableHead, TableRow, TextField, Autocomplete, FormControl
} from '@mui/material';

import {
  AddTopicBtn,
  RemoveTopicBtn,
  CircleButton,
  ActionButton,
  HeaderContainer,
  Title,
  NoAgenda,
  Topic,
} from "./AddTopics.styled";
import ErrorSnackbar from "./ErrorSnackbar";
import {usersSelector} from "../../store/Users/selectors";
import {IEvent} from "../../models/Event";

interface IAddTopicProps {
  showAgenda: boolean;
  setShowAgenda: (val: boolean) => void;
  existingEvent?: IEvent | undefined
}

const errorMessages = {
  emptyField: "Please make sure all fields are completed!",
  duplicate: "We already have this topic registered!"
}

export default function AddTopic({showAgenda, setShowAgenda, existingEvent}: IAddTopicProps) {
  const users = useSelector(usersSelector);
  // Theme
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));

  // Redux
  const dispatch = useDispatch()

  // State
  const topicsStoredRedux = useSelector(meetingsAgendaSelector);
  const [topic, setTopic] = useState('');
  const [presenter, setPresenter] = useState<string | null>(null);
  const [meetingTopics, setMeetingTopics] = useState(topicsStoredRedux);

  // Errors
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);
  const closeEmptyFieldsError = () => setEmptyFieldsError(false);
  const closeDuplicateError = () => setDuplicateError(false);


  // Handlers
  const handleClose = () => setShowAgenda(false);
  const handleTopic = (event: React.ChangeEvent<{ value: string }>) => setTopic(event.target.value);
  const handlePresenter = (_event: any, newValue: any) => setPresenter(newValue);
  const handleClearFields = () => {
    setTopic('');
    setPresenter('');
  };

  useEffect(() => {
    if (existingEvent) {
      setMeetingTopics(existingEvent.presenters);
    }
  });

  // // Adds topic to component state if topic and presenter are not empty
  const addTopic = () => {
    const isDupeTopic = !!meetingTopics.filter(meetingTopic => topic === meetingTopic.topic).length;
    const isDupePresenter = !!meetingTopics.filter(meetingTopic => presenter === meetingTopic.presenter).length;

    if (isDupeTopic && isDupePresenter) {
      setDuplicateError(true);
      return;
    }

    if (!topic || !presenter) {
      setEmptyFieldsError(true);
      return;
    }

    setMeetingTopics([...meetingTopics, {topic, presenter}]);
    handleClearFields();

  };

  // // Removes topic from component state, based on given topic r_id (redux id)
  const removeTopic = (topic: string, presenter: string) => setMeetingTopics(meetingTopics.filter(meetingTopic => meetingTopic.topic !== topic && meetingTopic.presenter !== presenter));

  // Stores topics in ReduxStore and closes the popup
  const handleConfirm = () => {
    dispatch(setAgenda(meetingTopics));
    handleClose();
  }

  return (
    <>
      <Dialog fullScreen={hasReachedBp} open={showAgenda} onClose={handleClose}>
        <HeaderContainer>
          <Title>{existingEvent ? "View" : "Add"} topics</Title>
          <CircleButton/>
        </HeaderContainer>

        <DialogContent>

          {hasReachedBp ? (
            <>
              <Table stickyHeader={true}>
                <TableHead>
                  <TableRow>
                    <TableCell>Topic</TableCell>
                    <TableCell sx={{width: 180}}>
                      <Input
                        fullWidth
                        value={topic}
                        onChange={handleTopic}
                        placeholder="Topic"
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Presenter</TableCell>

                    <TableCell sx={{width: 180}}>
                      <Autocomplete
                        fullWidth
                        value={presenter}
                        renderInput={(params) =>
                          <TextField {...params} variant="standard" placeholder={'Email'} fullWidth/>}
                        options={users.map((user) => user.email)}
                        onChange={handlePresenter}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Edit/Remove</TableCell>
                    <TableCell>
                      <AddTopicBtn addTopic={addTopic}/>
                      <RemoveTopicBtn handleClearFields={handleClearFields}/>
                    </TableCell>
                  </TableRow>

                </TableHead>
              </Table>

              <Table stickyHeader={true}>
                <TableBody>
                  {!!meetingTopics.length &&
                  meetingTopics.map((topicStored, topicIndex) => (
                    <Topic
                      topic={topicStored.topic}
                      key={topicIndex}
                      presenter={topicStored.presenter}
                      removeTopic={() => removeTopic(topicStored.topic, topicStored.presenter)}
                    ></Topic>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <Table stickyHeader={true}>
              <TableHead>
                <TableRow>
                  <TableCell>Edit/Remove</TableCell>
                  <TableCell>Topic</TableCell>
                  <TableCell>Presenter</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!existingEvent &&
                  <TableRow>
                    <TableCell>
                      <AddTopicBtn addTopic={addTopic}/>
                      <RemoveTopicBtn handleClearFields={handleClearFields}/>
                    </TableCell>

                    <TableCell sx={{width: 180}}>
                      <Input
                        value={topic}
                        onChange={handleTopic}
                        placeholder="Topic"
                      />
                    </TableCell>

                    <TableCell sx={{width: 180}}>
                      <Autocomplete
                        fullWidth
                        value={presenter}
                        renderInput={(params) =>
                          <TextField {...params} placeholder="Email" variant="standard" fullWidth/>}
                        options={users.map((user) => user.email)}
                        onChange={handlePresenter}
                      />
                    </TableCell>
                  </TableRow>
                }

                {!!meetingTopics.length &&
                meetingTopics.map((topicStored, topicIndex) => (
                  <Topic
                    topic={topicStored.topic}
                    key={topicIndex}
                    presenter={topicStored.presenter}
                    removeActive={!existingEvent}
                    removeTopic={() => removeTopic(topicStored.topic, topicStored.presenter)}
                  ></Topic>
                ))}
              </TableBody>
            </Table>
          )}

          {!meetingTopics.length && <NoAgenda/>}
        </DialogContent>

        <Divider/>

        <DialogActions>
          <ActionButton color="error" onClick={handleClose} variant="contained">
            Cancel
          </ActionButton>
          {!existingEvent &&
            <ActionButton onClick={handleConfirm} variant="contained">
              Confirm
            </ActionButton>
          }
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        visibility={duplicateError || emptyFieldsError}
        setVisibility={emptyFieldsError ? closeEmptyFieldsError : closeDuplicateError}
        message={emptyFieldsError ? errorMessages.emptyField : errorMessages.duplicate}/>
    </>
  );
}
