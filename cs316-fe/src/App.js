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

import axiosAPI from "./Componenets/Axios/API";
import Firebase from "./Componenets/Firebase/firebase";

function App() {
  const [usrToken, setUsrToken] = useState({
    token: null,
  });
  const [usrProps, setUsrProps] = useState({
    user: null,
  });
  //console.log(usrState.authUsr.email);

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
    const change = Firebase.auth.onAuthStateChanged((token) => {
      token ? setUsrToken({ token }) : setUsrToken({ token: null });
      return () => change();
    });
    if (usrToken) {
      /*
      axiosAPI.users
        .getUserInfo("usrToken.token.email")
        .then((res) => {
          //get User from Email
          const user = res.data;
          setUsrProps(user);
        })
        .catch((err) => {
          console.log(err);
        });
        */
    }
  }, []);

  //TODO: PASS USER EMAIL/STATE TO Profile & Likes
  //TODO: Add protected routing

  return (
    <div>
      <BrowserRouter>
        <Navbar usrState={usrToken.token} />
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
          <Route
            path="/explore"
            exact
            render={(props) => (
              <Explore {...props} firebase={Firebase} /*auth={usrState}*/ />
            )}
          />
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
              <Profile {...props} firebase={Firebase} auth="3" /> //usrState.authUser />
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
