import {Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import BookMeeting from "./pages/BookMeeting";
import DateTimeValidation from "./components/CreateNewReservation/DateTimePicker/DateTimePickerRange";
import AddAttendeesAgendaButtons from "./components/CreateNewReservation/AddElementButtons/AddAttendeesAgendaButtons";
import CustomPopup from "./components/CreateNewReservation/PopUpReservation/CustomPopup";import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function App() {
    const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

    return (
        <div className="App">

            {/*<Routes >*/}
            {/*  <Route path="/" element={<BookMeeting />} exact />*/}
            {/*</Routes>*/}


            <Button className="reservationBut" onClick={(e) => setVisibility(!visibility)}variant="contained">
            Create Reservation</Button>

            <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Create new reservation"
      >
        <DateTimeValidation/>
            <AddAttendeesAgendaButtons/>
      </CustomPopup>
        </div>
    );
}

export default App;
