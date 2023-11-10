
=======
import { Outlet } from "react-router-dom";
import {MainHeader} from './components/MainHeader/index1'
import { Footer } from "./components/footer";

function App() {
  return (
    <>

=======
      <MainHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

