import "../Login/Login.css";

export function Login() {
  return (
    <div>
      <div className="login-page">
        <div className="border">
          <div className="login-intro">
            <div className="top-info">
              <h1 className="login-title">Login</h1>
              <div className="toggles-login">
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"> Client</span>
                </label>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"> Tutor</span>
                </label>
              </div>
            </div>
            <div>
              <p className="get-started">to get started</p>
            </div>
          </div>
          <div className="login-boxes">
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
                Do not have an account yet?{" "}
                <a href="/Signup" className="here">
                  {" "}
                  Register Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
