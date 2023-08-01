import React from "react";
import Zomato from "./zomato";
import { Online } from "./cards/Online";
import { Collection } from "./Collections/Collection";
import { Footer } from "./Footer";
function App() {
  return (
    <div className="App">
      <Zomato />
      <Online />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
