import React from "react";
import { Route, Routes } from 'react-router-dom';
import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting />} exact />
        <Route path="/view" element={<ViewMeeting />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
