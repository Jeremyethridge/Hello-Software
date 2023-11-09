import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/Login">Login</a>
        <a href="/Signup">Signup</a>
        <a href="/Tutors">Tutors</a>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
