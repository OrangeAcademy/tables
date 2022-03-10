import {Route, Routes} from "react-router-dom";

// Local imports
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/404";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
