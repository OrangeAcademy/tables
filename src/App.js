import BookMeeting from "./pages/BookMeeting";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<BookMeeting />} exact />
      </Routes>
    </div>
  );
}

export default App;
