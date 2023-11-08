import React from 'react';
import '../Signup/Signup.css'

const SignUp = () => {

  return (
    <div>
      <div className="sign-up-page">
        <div className="border">
          <div className="sign-up-intro">
            <div>
              <h1 className="signup-title">Signup</h1>
            </div>
            <div>
              <p className="get-started">to get started</p>
            </div>
          </div>
          <div className="sign-in-boxes">
            <div>
              <input className="user-name" placeholder="  Username"></input>
            </div>
            <div>
              <input className="email" placeholder="  Email"></input>
            </div>
            <div>
              <input className="password" placeholder="  Password"></input>
            </div>
            <div>
              <button>Continue</button>
            </div>
            <div>
              <p className="change-page">
                Already registerd? <p>Login</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
