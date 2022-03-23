import { useCallback, useEffect } from 'react';
import { getClosestEvent } from 'utils/events.utils';
import { useAppDispatch } from './redux';
import { deleteEvent, getEvents } from 'store/Event/actionCreators';

import { useSelector } from 'react-redux';
import { selectedEventSelector } from 'store/SelectedEvent/selectors';
import { eventsSelector } from 'store/Event/selectors';
import { nextEventSelector } from 'store/StateRoom/selectors';
import {
  setNextEventStart,
  storeUpcomingEvent,
} from 'store/StateRoom/stateRoomSlice';
import { SERVER_EVENTS_ROUTE } from 'constants/paths';

function useDeleteEvent() {
  const dispatch = useAppDispatch();
  const selectedEvent = useSelector(selectedEventSelector);
  const events = useSelector(eventsSelector);
  const upcomingEv = useSelector(nextEventSelector);

  const getUpcomingEvent = useCallback(async () => {
    const events = await (await fetch(SERVER_EVENTS_ROUTE)).json();
    const nextMeeting = await getClosestEvent(events);

    try {
      dispatch(storeUpcomingEvent(nextMeeting));

      dispatch(setNextEventStart(nextMeeting.start));
    } catch (e) {
      console.log('No events');
      dispatch(setNextEventStart(''));
    }

    return nextMeeting;
  }, [dispatch]);

  // delete SELECTED event
  const deleteSelectedEvent = useCallback(async () => {
    if (selectedEvent && selectedEvent.elementId) {
      await dispatch(deleteEvent(selectedEvent.elementId));
      await getClosestEvent(events);
      await getUpcomingEvent();
    }
  }, [dispatch, events, getUpcomingEvent, selectedEvent]);

  // delete (current || upcoming) event
  const deleteUpcomingEvent = useCallback(async () => {
    if (upcomingEv && upcomingEv.elementId) {
      await dispatch(deleteEvent(upcomingEv.elementId));
      // DISPATCH FETCH EVENTS
      await dispatch(getEvents());
      await getUpcomingEvent();
    }
  }, [dispatch, getUpcomingEvent, upcomingEv]);

  return {
    deleteSelectedEvent,
    deleteUpcomingEvent,
  };
}

export default useDeleteEvent;
