import { Route, Routes } from "react-router-dom";

// Local imports
import BookMeeting from "./pages/BookMeeting";
import ViewMeeting from "./pages/ViewMeeting";
import PageNotFound from "./pages/404";
import PopUpMeeting from "./pages/PopUpMeeting";
import dayjs from "dayjs";

// const FindTheMostRecentEvent = () => {
//   let currentHour = dayjs();
//   let nestUpdate = "";
//   const maxDates = days.map((day) => dayjs(day))
//   const recentlyEvent = maxDates.reduce((accumulator, curVal) =>
//     curVal && accumulator.isBefore(curVal) ? accumulator : curVal
//   );
//
//   if (currentHour.diff(recentlyEvent) === 0) {
//     console.log("busy");
//   }
//   else {
//     console.log("free")
//   }
// }


function App() {
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
