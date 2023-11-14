import { useLoggedIn } from "../../Hooks/useLoggedIn";
import { Nav, Menu, NavLink } from "../Navbar/elements";

export const Navbar = () => {
  const { isLoggedIn, setLoggedIn } = useLoggedIn();
  return (
    <Nav>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Tutors">Tutors</NavLink>

        {isLoggedIn ? (
          <NavLink to="/Login" onClick={() => setLoggedIn(false)}>
            Log Out
          </NavLink>
        ) : (
          <>
            <NavLink to="/Signup">Signup</NavLink>
            <NavLink to="/Login">Login</NavLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};
