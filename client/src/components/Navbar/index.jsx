import { Nav, Menu, NavLink } from "../Navbar/elements";

export const Navbar = () => {
  return (
    <Nav>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Tutors">Tutors</NavLink>
        <NavLink to="/Signup">Signup</NavLink>
        <NavLink to="/Login">Login</NavLink>
      </Menu>
    </Nav>
  );
};
