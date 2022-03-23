
import {Route, Routes} from "react-router-dom";

// Local imports
import PageNotFound from "./pages/404";
import Home from "pages/HomePage";

function App() {
   
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
