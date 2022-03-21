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
  TableCell, TableHead, TableRow, TextField, Autocomplete
} from '@mui/material';

import {
  AddTopicBtn,
  RemoveTopicBtn,
  ActionButton,
  HeaderContainer,
  Title,
  NoAgenda,
  Topic,
} from "./AddTopics.styled";
import ErrorSnackbar from "./ErrorSnackbar";

import {usersSelector} from "../../store/User/selectors";
import {IEvent} from "../../models/Event";
import {useAppSelector} from "../../hooks/redux";

interface IAddTopicProps {
  showAgenda: boolean;
  setShowAgenda: (val: boolean) => void;
}

const errorMessages = {
  emptyField: "Please make sure all fields are completed!",
  duplicate: "We already have this topic registered!"
}

export default function AddTopic({showAgenda, setShowAgenda}: IAddTopicProps) {
  const existingEvent = useAppSelector(state => state.selectedEvent.event);
const {start, presenters} = existingEvent;
  // Theme
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));

  // Redux
  const dispatch = useDispatch();

  // State
  const topicsStoredRedux = useSelector(meetingsAgendaSelector);
  const [topic, setTopic] = useState("");
  const [presenter, setPresenter] = useState("");
  const [meetingTopics, setMeetingTopics] = useState(topicsStoredRedux);
  // Errors
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const closeEmptyFieldsError = () => setEmptyFieldsError(false);
  // const closeDuplicateError = () => setErrorMessage(false);


  // Handlers
  const handleClose = () => setShowAgenda(false);
  const handleTopic = (event: React.ChangeEvent<{ value: string }>) => setTopic(event.target.value);
  const handlePresenter = (event: React.ChangeEvent<{ value: string }>) => setPresenter(event.target.value);
  const handleClearFields = () => {
    setTopic('');
    setPresenter('');
  };

  useEffect(() => {
    if (start) {
      setMeetingTopics(presenters);
    }
  }, []);

  useEffect(() =>{
    if(presenters.length){
      setEmptyFieldsError(false)
    }
    else {
      setErrorMessage(errorMessages.emptyField);
    }

  }, [existingEvent])

  // // Adds topic to component state if topic and presenter are not empty
  const addTopic = () => {
    const isDupeTopic = !!meetingTopics.filter(meetingTopic => topic === meetingTopic.topic).length;
    const isDupePresenter = !!meetingTopics.filter(meetingTopic => presenter === meetingTopic.presenter).length;

    if (isDupeTopic && isDupePresenter) {
      setErrorMessage(errorMessages.duplicate);
      setEmptyFieldsError(true);
    }

    if (!topic || !presenter) {
      setErrorMessage(errorMessages.emptyField);
      setEmptyFieldsError(true);
    }
    setMeetingTopics([...meetingTopics, {topic, presenter: presenter!}]);

    handleClearFields();

  };

  // // Removes topic from component state, based on given topic r_id (redux id)
  const removeTopic = (topic: string, presenter: string) => setMeetingTopics(meetingTopics.filter(meetingTopic => meetingTopic.topic !== topic && meetingTopic.presenter !== presenter));

  // Stores topics in ReduxStore and closes the popup
  const handleConfirm = () => {
    dispatch(setAgenda(meetingTopics));
    if (!meetingTopics.length) {
      setErrorMessage(errorMessages.emptyField);
      setEmptyFieldsError(true);
    } else {
      handleClose()
    }
  }

  return (
    <>
      <Dialog fullScreen={hasReachedBp} open={showAgenda} onClose={handleClose}>
        <HeaderContainer sx={{display: 'flex', justifyContent: 'center'}}>
          <Title>{start ? "View" : "Add"} topics</Title>
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
                {!start &&
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

                  <TableCell sx={{width: '19rem'}}>
                    <Input
                      value={presenter}
                      onChange={handlePresenter}
                      placeholder="Presenter"
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
                    removeActive={!existingEvent.start}
                    removeTopic={() => removeTopic(topicStored.topic, topicStored.presenter)}
                  ></Topic>
                ))}
              </TableBody>
            </Table>
          )}

          {!meetingTopics.length && <NoAgenda/>}
        </DialogContent>

        <Divider/>

        <DialogActions sx={{justifyContent: 'center'}}>
          <ActionButton color="error" onClick={handleClose} variant="contained">
            Close
          </ActionButton>

          {!existingEvent.start &&
          <ActionButton onClick={handleConfirm} variant="contained">
            Confirm
          </ActionButton>
          }
        </DialogActions>
      </Dialog>
      <ErrorSnackbar
        visibility={emptyFieldsError}
        setVisibility={setEmptyFieldsError}
        message={errorMessage}/>
    </>
  );
}
