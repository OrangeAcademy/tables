import { Route, Routes } from "react-router-dom";
import BookMeeting from "./pages/BookMeeting";
import DateTimeValidation from "./components/CreateNewReservation/DateTimePicker/DateTimePickerRange";
import AddAttendeesAgendaButtons from "./components/CreateNewReservation/AddElementButtons/AddAttendeesAgendaButtons";
import Inputs from "./pages/Inputs";

function App() {
  return (
    <div className="App">
      <Inputs />
      {/*<Routes >*/}
      {/*  <Route path="/" element={<BookMeeting />} exact />*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
