import React, { useState } from "react";
import googleDriveLogo from "./img/google-drive.png";
import Data from "./Data";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { auth, provider } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      {user ? (
        <>
          <Header photoURL={user.photoURL} />
          <div className="App">
            <Sidebar />
            <Data />
          </div>
        </>
      ) : (
        <div className="loginWrap">
          <img src={googleDriveLogo} alt="" width="36px" />
          <button onClick={signIn}>Login to Google Drive</button>
        </div>
      )}
    </>
  );
};

export default App;
