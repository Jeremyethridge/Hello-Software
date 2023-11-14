import { useMutation, useQuery } from "@apollo/client";
import { ClientLogin, TutorLogin } from "../../utils/mutations";
import { checkEmail, checkPassword } from "../../utils/validators";
import "../Login/Login.css";
import { useState, useRef, useEffect } from "react";
import { useLoggedIn } from "../../Hooks/useLoggedIn";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "../../Hooks/useNavigation";

export function Login() {
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [tutorIsChecked, setTutorIsChecked] = useState(false);
  const [clientIsChecked, setClientIsChecked] = useState(true);
  const [isValidForm, setValidForm] = useState(false);
  const [isError, setError] = useState(false);
  const [sucess, setSuccess] = useState(false);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  let formChecked = tutorIsChecked || clientIsChecked;

  const [mutateClient] = useMutation(ClientLogin);
  const [mutateTutor] = useMutation(TutorLogin);
  const { setLoggedIn } = useLoggedIn();
  const navigate = useNavigation();

  //reset all state values to default
  function resetForm() {
    setValidEmail(true);
    setValidPassword(true);
    setTutorIsChecked(false);
    setClientIsChecked(true);
    setValidForm(false);

    emailRef.current.value = "";
    passRef.current.value = "";
  }

  //spies on form status
  useEffect(() => {
    //form validation check
    if (isValidForm) {
      const email = emailRef.current.value;
      const password = passRef.current.value;

      //if client is checkd
      if (clientIsChecked && !tutorIsChecked) {
        //login as client
        mutateClient({
          variables: { loginInput: { email, password } },
        })
          .then(({ loading, data }) => {
            if (!loading) {
              if (data) {
                //save token in sessionStorage
                sessionStorage.setItem("token", data.clientLogin.token);
                setError(false);
                setSuccess(true);
                setLoggedIn(true);
                navigate();
              }
            }
          })
          .catch((e) => {
            setError(true);
          })
          .finally(() => resetForm());
      }
      //if tutor is checked
      else if (tutorIsChecked && !clientIsChecked) {
        //login as tutor
        mutateTutor({
          variables: { loginInput: { email, password } },
        })
          .then(({ loading, data }) => {
            if (!loading) {
              if (data) {
                //store token in session storage
                sessionStorage.setItem("token", data.tutorLogin.token);
                setError(false);
                setSuccess(true);
                setLoggedIn(true);
                navigate();
              }
            }
          })
          .catch((e) => {
            setError(true);
          })
          .finally(() => resetForm());
      } else resetForm();
    }
  }, [isValidForm]);

  //toggles client check status
  const handleClient = (e) => {
    setClientIsChecked(!clientIsChecked);
    setTutorIsChecked(false);
  };

  //toggles tutor check status
  const handleTutor = (e) => {
    setClientIsChecked(false);
    setTutorIsChecked(!tutorIsChecked);
  };

  //on submit function
  function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    setValidEmail(checkEmail(email));
    const password = passRef.current.value;
    setValidPassword(checkPassword(password));

    setValidForm(email && password && formChecked);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="login-page">
          <div className="border">
            <div className="login-intro">
              <div className="top-info">
                <h1 className="login-title">Login</h1>
                <div className="toggles-login">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={clientIsChecked}
                      onChange={handleClient}
                    ></input>
                    <span className="slider round"> Client</span>
                  </label>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={tutorIsChecked}
                      onChange={handleTutor}
                    ></input>
                    <span className="slider round"> Tutor</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="login-boxes">
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
                  type="password"
                  ref={passRef}
                ></input>
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
              <div>
                <p className="change-page">
                  Do not have an account yet?
                  <a href="/Signup" className="here">
                    Register Here
                  </a>
                </p>
              </div>
            </div>
            {sucess ? <p>Login Successful!</p> : null}
            {isError ? <p>Login Failed</p> : null}
            {!formChecked ? <p>Please select either tutor or client</p> : null}
            {!validEmail ? <p>Email or password is incorrect!</p> : null}
            {!validPassword ? <p>Email or password is incorrect!</p> : null}
          </div>
        </div>
      </div>
    </form>
  );
}
