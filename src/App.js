import { Route, Routes } from "react-router-dom";
import BookMeeting from "./pages/BookMeeting";
import PopUpMeeting from "./pages/PopUpMeeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookMeeting />} exact />
        <Route path="/meeting" element={<PopUpMeeting />} exact />
      </Routes>
    </div>
  );
}

export default App;
