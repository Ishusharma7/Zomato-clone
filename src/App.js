import React from "react";
import Zomato from "./zomato";
import {Investor} from "./Investor Relations/Investor"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
           <Routes>
            <Route exact path= "/Investor" element={<Investor />} />
            <Route exact path= "/" element={<Zomato />} />

           </Routes>
           </Router>
      
    </div>
  );
}

export default App;
