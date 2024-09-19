import { useState, useRef} from "react";
import { useMutation } from "@apollo/client";
import {
  checkEmail,
  checkPassword,
  checkPayment,
} from "../../utils/validators";
import "../Signup/Signup.css";
import { skills } from "../../utils/skillsArray";
import { CreateClient, CreateTutor } from "../../utils/mutations";
import { useNavigation } from "../../Hooks/useNavigation";

export function Signup() {
  const [clientIsChecked, setClientIsChecked] = useState(true);
  const [tutorIsChecked, setTutorIsChecked] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [validPayment, setvalidPaymnet] = useState(true);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const skillRef = useRef([]);
  const rateRef = useRef(null);
  const nameRef = useRef(null);
  const paymentRef = useRef(null);

  const [createClient] = useMutation(CreateClient);
  const [createTutor] = useMutation(CreateTutor);
  const navigate = useNavigation();

  //reset state defaults
  function resetForm() {
    setValidEmail(true);
    setValidPassword(true);

    setError(false);
    emailRef.current.value = "";
    passRef.current.value = "";
  }

  //handle client check status
  const handleClient = () => {
    setClientIsChecked(!clientIsChecked);
    setTutorIsChecked(false);
  };

  //handle tutor check status
  const handleTutor = () => {
    setClientIsChecked(false);
    setTutorIsChecked(!tutorIsChecked);
  };

  //handles form submission
  function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    setValidEmail(checkEmail(email));
    const password = passRef.current.value;
    setValidPassword(checkPassword(password));

    const name = nameRef.current.value;

    //if client mode is selected
    if (clientIsChecked && !tutorIsChecked) {
      if (email && password && name) {
        //signup as client
        createClient({ variables: { clientInput: { name, email, password } } })
          .then(({ loading }) => {
            if (loading.data.createClient.name) {
              setSuccess(true);
              navigate("/Login");
            }
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => resetForm());
      }
    }
    //if tutor mode is selected
    else if (tutorIsChecked && !clientIsChecked) {
      const skill = Array.from(skillRef.current.options)
        .filter((option) => {
          return option.selected;
        })
        .map((option) => option.value);
      const rate = Number(rateRef.current.value);
      if (isNaN(rate)) {
        setNumberError(true);
        return;
      }

      const payment = paymentRef.current.value;
      console.log(payment, checkPayment(payment));
      if (!checkPayment(payment)) {
        setvalidPaymnet(false);
        return;
      }

      if (email && name && password && skill && rate && payment) {
        //signup as a tutor
        createTutor({
          variables: {
            tutorInput: { name, email, skill, rate, password, payment },
          },
        })
          .then((loading) => {
            if (loading.data.createTutor.name) {
              setSuccess(true);
              navigate("/Login");
            }
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => resetForm());
      }
    } else return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="sign-up-page">
          <div className="border">
            <div className="sign-up-intro">
              <div className="signupHeader">
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
            </div>

            <div className="sign-in-boxes">
              <div>
                <input
                  className="user-name"
                  placeholder="  Name"
                  ref={nameRef}
                ></input>
              </div>
              <div>
                <input
                  className="email"
                  placeholder="  Email"
                  ref={emailRef}
                ></input>
              </div>
              <div>
                <input
                  className="password"
                  placeholder="  Password"
                  // type="password"
                  ref={passRef}
                ></input>
              </div>
              {tutorIsChecked ? (
                <div>
                  <div>
                    <input
                      className="password"
                      placeholder=" Hourly Rate"
                      ref={rateRef}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder=" Payment Link"
                      ref={paymentRef}
                      className="password"
                    />
                  </div>
                  <div>
                    <p className="skills-title">Skills</p>
                    <p>Ctrl click for mutliple skills!</p>
                    <div className="skills-box">
                      <label htmlFor="">
                        <select
                          name="skills[]"
                          id="skillsarray"
                          multiple
                          ref={skillRef}
                          className="skillSelector"
                        >
                          {skills.map((skill) => {
                            return (
                              <option key={skill} value={skill}>
                                {skill}
                              </option>
                            );
                          })}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div>
                <button type="submit">Signup</button>
              </div>
              {numberError ? (
                <p>Please input a number for your hourly rate!</p>
              ) : null}
              {isSuccess ? <p>Thanks for signing up, please log in!</p> : null}
              {isError ? <p>Error signing up please try again later!</p> : null}
              {!validEmail ? <p>Please input a valid email!</p> : null}
              {!validPassword ? (
                <p>
                  Password must contain at least one uppercase, at least one
                  number, and must be at least 8 characters long!
                </p>
              ) : null}
              {validPayment ? null : <p>Payment method must be a url link!</p>}

              <div>
                <p className="change-page">
                  Already registered? Login &nbsp;<a href="/Login">here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
