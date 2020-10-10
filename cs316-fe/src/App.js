import React from "react";
import "./App.css";

import Setup from "./Componenets/Setup";
import Navbar from "./Navbar";
import Profile from "./Componenets/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      {/*<div className="App">
        <header className="App-header">Welcome to Design Duke</header>
        <Setup className="App-header" />
  </div>*/}
    </div>
  );
}

export default App;
