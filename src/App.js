import React from "react";
import { Route, Routes } from "react-router-dom";
import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";
import PageNotFound from "./pages/404";
import PopUpMeeting from "./pages/PopUpMeeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting />} exact />
        <Route path="/view" element={<ViewMeeting />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="/meeting" element={<PopUpMeeting />} exact />
      </Routes>
    </div>
  );
}

export default App;
