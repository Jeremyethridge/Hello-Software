import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #483c32;
  color: #c4a484;
  display: flex;
  height: 50px;

  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const Menu = styled.div`
    display:flex;
    justify-content: space-between;
    font family: 'Geologica', sans-serif;
`;
export const NavLink = styled(Link)`
  margin: 10%;
  color: #c4a484;
  &:hover {
    color: #ffffff;
  }
`;
