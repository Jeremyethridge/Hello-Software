<<<<<<< HEAD

import {MainHeader} from './components/MainHeader/index1'

=======
import { Outlet } from "react-router-dom";
>>>>>>> 94e0243a55487a9948ceca26b29032b6e0118ddc

function App() {
  return (
    <>
<<<<<<< HEAD
      <MainHeader />
      <h1>Hello World</h1>
=======
      <nav>
        <a href="/">Home</a>
        <a href="/Login">Login</a>
        <a href="/Signup">Signup</a>
        <a href="/Tutors">Tutors</a>
      </nav>
      <Outlet />
>>>>>>> 94e0243a55487a9948ceca26b29032b6e0118ddc
    </>
  );
}

export default App;

