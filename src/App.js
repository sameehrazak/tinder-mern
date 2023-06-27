import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";


function App() {
  return (
    // BEM class naming
    <div className="App">

      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
