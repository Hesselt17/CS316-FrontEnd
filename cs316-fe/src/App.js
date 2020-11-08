import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import {
  Setup,
  Signup,
  Login,
  Home,
  Likes,
  Explore,
  Community,
  Upload,
  Profile,
  ProfileEdit,
} from "./Componenets/Pages/pageExporter";

import Firebase from "./Componenets/Firebase/firebase";

function App() {
  const [usrState, setUsrState] = useState({
    authUsr: null,
  });
  console.log(usrState);

  /*
  setLoginStatus = (login) => {
    setUsrState({ loggedIn: login });
  };
  setUser = (usr) => {
    setUsrState({ user: usr });
  };
*/
  /**/
  useEffect(() => {
    const change = Firebase.auth.onAuthStateChanged((authUsr) => {
      authUsr ? setUsrState({ authUsr }) : setUsrState({ authUsr: null });
      return () => change();
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar usrState={usrState.authUsr} />
        <Switch>
          <Route path="/setup" exact component={Setup} />
          <Route
            path="/signup"
            exact
            render={(props) => (
              <Signup {...props} firebase={Firebase} /*auth={usrState}*/ />
            )}
          />
          <Route
            path="/login"
            exact
            render={(props) => (
              <Login {...props} firebase={Firebase} /*auth={usrState}*/ />
            )}
          />
          <Route path="/home" exact component={Home} />
          <Route path="/likes" exact component={Likes} />
          <Route path="/explore" exact component={Explore} />
          <Route path="/community" exact component={Community} />
          <Route
            path="/upload"
            exact
            render={(props) => (
              <Upload {...props} firebase={Firebase} /*auth={usrState}*/ />
            )}
          />
          <Route
            path="/profile"
            exact
            render={(props) => (
              <Profile {...props} firebase={Firebase} /*auth={usrState}*/ />
            )}
          />
          <Route path="/profile/edit" component={ProfileEdit} />
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
