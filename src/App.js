import React from "react";
import {Route, Routes} from 'react-router-dom';
import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting/>} exact/>
        <Route path="/view" element={<ViewMeeting/>}/>
      </Routes>
    </div>
  );
}

export default App;
