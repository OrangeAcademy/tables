// React imports
import { useState } from 'react';

// Redux Imports
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { store, RootState } from '../../app/store/store';
import { IMeetingTopicRedux, storeMeetingTopics } from '../../app/slices/meetingTopicsSlice';

// MUI Imports
import { useTheme } from '@mui/material/styles';
import { Dialog, DialogActions, DialogContent, useMediaQuery, Divider, Input, Table, TableBody, 
  TableCell, TableHead, TableRow } from '@mui/material';

import {AddTopicBtn, RemoveTopicBtn, CircleButton, ActionButton, HeaderContainer, Title, NoAgenda, Topic,} from "./AddTopics.styled";


interface IAddTopicProps {
  showAgenda: boolean;
  setShowAgenda: (val: boolean) => void;
}

export default function AddTopic({ showAgenda, setShowAgenda }: IAddTopicProps) {
  // Theme
  const theme = useTheme();
  const hasReachedBp = useMediaQuery(theme.breakpoints.down('sm'));

  // State
  const topicsStoredRedux = useSelector((state: RootState) => state.meetingTopics.presenters); // Redux
  const [topic, setTopic] = useState('');
  const [presenter, setPresenter] = useState('');
  const [meetingTopics, setMeetingTopics] = useState<IMeetingTopicRedux[]>(topicsStoredRedux);


  // Handlers
  const handleClose = () => setShowAgenda(false);
  const handleTopic = (event: React.ChangeEvent<{ value: string }>) => setTopic(event.target.value);
  const handlePresenter = (event: React.ChangeEvent<{ value: string }>) => setPresenter(event.target.value);
  const handleClearFields = () => { setTopic(''); setPresenter(''); };

  // Adds topic to component state if topic and presenter are not empty
  const addTopic = () => {
    if (topic.length && presenter.length) {
        setMeetingTopics([...meetingTopics, { presenter, topic, r_id: nanoid(), confirmationStatus: 0 }]);
        handleClearFields();
    }
  };
  
  // Removes topic from component state, based on given topic r_id (redux id)
  const removeTopic = (r_id: string) => setMeetingTopics(meetingTopics.filter(topic => topic.r_id !== r_id));

  // Stores topics in ReduxStore and closes the popup
  const handleConfirm = () => { 
    store.dispatch(storeMeetingTopics({ ...meetingTopics }));
    handleClose();
  }

  return (
    <Dialog fullScreen={hasReachedBp} open={showAgenda} onClose={handleClose}>
      <HeaderContainer>
        <Title>Add topics</Title>
        <CircleButton />
      </HeaderContainer>

      <DialogContent>

          {hasReachedBp ? (
            <>
            <Table stickyHeader={true}>
              <TableHead>
                <TableRow>
                  <TableCell>Topic</TableCell>
                  <TableCell >
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

                  <TableCell >
                    <Input
                      fullWidth
                      value={presenter}
                      onChange={handlePresenter}
                      placeholder="Presenter"
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Edit/Remove</TableCell>
                  <TableCell >
                    <AddTopicBtn addTopic={addTopic} />
                    <RemoveTopicBtn handleClearFields={handleClearFields} />
                  </TableCell>
                </TableRow>
                
              </TableHead>
              </Table>

            <Table stickyHeader={true}>
              <TableBody>
                {!!meetingTopics.length &&
                  meetingTopics.map((topicStored: IMeetingTopicRedux, topicIndex) => (
                    <Topic
                      topic={topicStored.topic}
                      key={topicIndex}
                      presenter={topicStored.presenter}
                      removeTopic={() => removeTopic(topicStored.r_id)}
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
                <TableRow>
                  <TableCell>
                    <AddTopicBtn addTopic={addTopic} />
                    <RemoveTopicBtn handleClearFields={handleClearFields} />
                  </TableCell>

                  <TableCell>
                    <Input
                      value={topic}
                      onChange={handleTopic}
                      placeholder="Topic"
                    />
                  </TableCell>

                  <TableCell>
                    <Input
                      value={presenter}
                      onChange={handlePresenter}
                      placeholder="Presenter"
                    />
                  </TableCell>
                </TableRow>

                {!!meetingTopics.length &&
                  meetingTopics.map((topicStored: IMeetingTopicRedux, topicIndex) => (
                    <Topic
                      topic={topicStored.topic}
                      key={topicIndex}
                      presenter={topicStored.presenter}
                      removeTopic={() => removeTopic(topicStored.r_id)}
                    ></Topic>
                  ))}
              </TableBody>
            </Table>
          )}

        {!meetingTopics.length && <NoAgenda />}
      </DialogContent>

      <Divider />

      <DialogActions>
        <ActionButton color="error" onClick={handleClose} variant="contained">
          Cancel
        </ActionButton>
        <ActionButton onClick={handleConfirm} variant="contained">
          Confirm
        </ActionButton>
      </DialogActions>
    </Dialog>
  );
}
