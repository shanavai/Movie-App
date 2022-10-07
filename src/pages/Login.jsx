import React, { useState } from "react";
import SignPage from "./SignPage"; 
import './LoginPage.css'

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginPage">
      <div className="loginPage__background">
        <img
          className="loginPage__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button className="loginPage__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>
      <div className="loginPage__body">
        {signIn ? (
          <SignPage/>
        ):(
           <>
            <h1>Unlimited films, tv programmes and more.</h1>
            <h2>What anywhere. Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>

            <div className="loginPage__input">
              <form> 
                <button
                  onClick={() => setSignIn(true)}
                  className="loginPage__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
        </>
        )}
       

      </div>
    </div>
  );
};

export default Login;
