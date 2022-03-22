import { useCallback } from 'react';
import { getClosestEvent } from 'utils/events.utils';
import { useAppDispatch } from './redux';
import {deleteEvent, getEvents} from 'store/Event/actionCreators';

import { useSelector } from 'react-redux';
import { selectedEventSelector } from 'store/SelectedEvent/selectors';
import { eventsSelector } from 'store/Event/selectors';
import { nextEventSelector } from 'store/StateRoom/selectors';

function useDeleteEvent() {
  const dispatch = useAppDispatch();
  const selectedEvent = useSelector(selectedEventSelector);
  const events = useSelector(eventsSelector);
  const upcomingEv = useSelector(nextEventSelector);

  // delete SELECTED event
  const deleteSelectedEvent = useCallback(async () => {
    if (selectedEvent && selectedEvent.elementId) {
      await dispatch(deleteEvent(selectedEvent.elementId));
      getClosestEvent(events);
    }
  }, [dispatch, events, selectedEvent]);

  // delete (current || upcoming) event
  const deleteUpcomingEvent = useCallback(async () => {
    if (upcomingEv && upcomingEv.elementId) {
      await dispatch(deleteEvent(upcomingEv.elementId));
      // DISPATCH FETCH EVENTS
      await dispatch(getEvents());
    }
  }, [dispatch, events, upcomingEv]);

  return {
    deleteSelectedEvent,
    deleteUpcomingEvent,
  };
}

export default useDeleteEvent;
