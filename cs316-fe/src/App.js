import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import Home from "./Componenets/Home";
import Likes from "./Componenets/Likes";
import Explore from "./Componenets/Explore";
import Community from "./Componenets/Community";
import Upload from "./Componenets/Upload";
import Profile from "./Componenets/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*<SideBar auth={authProps} />*/}
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/likes" exact component={Likes} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/community" exact component={Community} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/profile" exact component={Profile} />

          {/*<Route
                path="/profile"
                exact
                render={(props) => <Profile {...props} auth={authProps} />}
              />
              <Route
                path="/registration"
                exact
                render={(props) => <Registration {...props} auth={authProps} />}
              />
              <Route
                path="/login"
                exact
                render={(props) => <Login {...props} auth={authProps} />}
              />*/}
        </Switch>
      </BrowserRouter>
      {/*<div className="App">
        <header className="App-header">Welcome to Design Duke</header>
        <Setup className="App-header" />
  </div>*/}
    </div>
  );
}

export default App;
