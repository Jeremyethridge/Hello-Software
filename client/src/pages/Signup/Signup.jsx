import { useState } from 'react';
import '../Signup/Signup.css'

export function SignUp (){
  const [clientIsChecked, setClientCheck] = useState(false);
  const [tutorIsChecked, setTutorCheck] = useState(false)


  const handleClient = (e) => {
    setClientCheck(e.target.checked)
  }
  
  const handleTutor = (e) => {
    setTutorCheck(e.target.checked)
  }


  return (
    <div>
      <div className="sign-up-page">
        <div className="border">
          <div className="sign-up-intro">
            <div>
              <h1 className="signup-title">Signup</h1>
              <div className="toggles-signup">
                <label className="switch">
                  <input
                    checked={clientIsChecked}
                    onChange={handleClient}
                    type="checkbox"
                  ></input>
                  <span className="slider round"> Client</span>
                </label>
                <label className="switch">
                  <input
                  checked={tutorIsChecked}
                  onChange={handleTutor}
                    type="checkbox"
                  ></input>
                  <span className="slider round"> Tutor</span>
                </label>
              </div>
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
            {tutorIsChecked ? (
              <div>
                <div>
                  <input className="password" placeholder=" P Number" />
                </div>
                <div>
                  <p className="skills-title">Skills</p>
                  <div className="skills-box">
                    <label>
                      <input type="checkbox" /> HTML
                    </label>
                    <label>
                      <input type="checkbox" /> CSS
                    </label>
                    <label>
                      <input type="checkbox" /> JavaScript
                    </label>
                    <label>
                      <input type="checkbox" /> React
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

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
}

