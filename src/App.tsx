import { useCallback, useEffect } from "react";
import {Route, Routes} from "react-router-dom";

// Local imports
// import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/404";
import { Home } from "./pages/HomePage";
import { getClosestEvent } from "./utils/events.utils";


// Frequency for fetching data from API
const FETCH_FREQUENCY = 30000;
const controller = new AbortController();

function App() {
  const getUpcomingEvent = useCallback(async () => {
    try{
      //    Set the upcoming event to the one running now
     await getClosestEvent()
    
    //  .then(value => setRunningEvent(value))
    } catch(e) {
      console.error('ENCOUNTERED ERROR AT getUpcomingEvent: ', e)
      throw Error;
    }
}, [])

useEffect(() => {
  getUpcomingEvent(); 
}, [])

useEffect( () => {
  const fetchEventsInterval = setInterval(() => getUpcomingEvent(), FETCH_FREQUENCY) 

  return () => {
    clearInterval(fetchEventsInterval);
    controller.abort();
  };
}, [getUpcomingEvent])



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound/>}/> 
      </Routes>
    </div>
  );
}

export default App;
