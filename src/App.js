import {Route, Routes} from "react-router-dom";
import BookMeeting from "./pages/BookMeeting";
import DateTimeValidation from "./components/CreateNewReservation/DateTimePicker/DateTimePickerRange";
import AddAttendeesAgendaButtons from "./components/CreateNewReservation/AddElementButtons/AddAttendeesAgendaButtons";

function App() {
    return (
        <div className="App">
            <DateTimeValidation/>
            <AddAttendeesAgendaButtons/>
            {/*<Routes >*/}
            {/*  <Route path="/" element={<BookMeeting />} exact />*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
