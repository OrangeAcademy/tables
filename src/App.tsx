import { Route, Routes } from "react-router-dom";
import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting.jsx";
import PageNotFound from "./pages/404";
import PopUpMeeting from "./pages/PopUpMeeting";

function App() {
    // Dispatch and selectors
    // const dispatch = useAppDispatch()
    // const events = useSelector(eventsSelector);
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
