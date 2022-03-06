import { Route, Routes } from "react-router-dom";
import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";
import PageNotFound from "./pages/404";
import PopUpMeeting from "./pages/PopUpMeeting";
import {useAppDispatch} from "./hooks/redux";
import {useDispatch, useSelector} from "react-redux";
import {eventsSelector} from "./store/Event/selectors";
import {useCallback, useEffect} from "react";
import {eventAPI} from "./services/EventServices";
import {fetchEvents} from "./store/Event/actionCreators";
import {eventSlice} from "./store/Event/eventSlice";

function App() {
    // Dispatch and selectors
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(fetchEvents())
    },[])
    const events = useSelector(eventsSelector);
    console.log(events);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting />} />
        <Route path="/view" element={<ViewMeeting />} />
        <Route path="/meeting" element={<PopUpMeeting />}  />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
