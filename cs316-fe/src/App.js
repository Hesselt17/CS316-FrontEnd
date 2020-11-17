import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import {
  Setup,
  Signup,
  Login,
  Login2,
  Home,
  Likes,
  Explore,
  Community,
  Upload,
  Profile,
  ProfileEdit,
  DesignDetails,
  CommunityDetails,
} from "./Componenets/Pages/pageExporter";

import axiosAPI from "./Componenets/Axios/API";
import Firebase from "./Componenets/Firebase/firebase";

const initialUser = {
  avatar: null,
  bio: "a",
  email: "a",
  name: "a",
  netid: "a",
  password: "",
  score: 0,
  uid: 3,
  wherelive: "Hollows",
};

function App() {
  const [usrToken, setUsrToken] = useState({
    token: null,
  });
  const [usrProps, setUsrProps] = useState({
    user: null,
  });
  //console.log(usrState.authUsr.email);

  useEffect(() => {
    console.log("useEffect");
    let changedState;
    const change = async () => {
      changedState = await Firebase.auth.onAuthStateChanged((token) => {
        token ? setUsrToken({ token }) : setUsrToken({ token: null });
      });
    };
    change();
  }, [setUsrToken]);

  useEffect(() => {
    if (usrToken.token) {
      console.log(usrToken);
      const updateUser = async () => {
        axiosAPI.users
          .getUserInfo(usrToken.token.email)
          .then((res) => {
            //get User from Email
            const user = res.data;
            console.log("APP USER", user);
            setUsrProps(user);
            localStorage.setItem("CurrentUser", JSON.stringify(user));
            console.log(JSON.parse(localStorage.getItem("CurrentUser")));
          })
          .catch((err) => {
            console.log(err);
          });
      };
      updateUser();
    }
    console.log(usrProps);
  }, [usrToken]);

  //TODO: Add protected routing

  return (
    <div>
      <BrowserRouter>
        {usrProps && <Navbar usrState={usrToken.token} />}
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
              <Login2 {...props} firebase={Firebase} /*auth={usrState}*/ />
            )}
          />
          <Route path="/home" exact component={Home} />
          <Route
            path="/likes"
            exact
            render={(props) => (
              <Likes
                {...props}
                firebase={Firebase}
                auth={usrProps && usrProps}
              /> //usrProps
            )}
          />
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
              <Profile {...props} firebase={Firebase} auth={usrProps} />
            )}
          />
          <Route path="/profile/edit" component={ProfileEdit} />
          <Route path="/design/details" component={DesignDetails} />
          <Route path="/community/details" component={CommunityDetails} />
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
