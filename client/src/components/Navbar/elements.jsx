
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #483C32;
    color: #C4A484;
    display: flex;
    height: 50px;
    justify-content: space-between;
    width:100%;
    max-width: 100%;
   
`

export const Menu = styled.div`
    display: flex;
    
    ${'' /* justify-content: space-between; */}
    ${'' /* align-items: center; */}
    font family: 'Geologica', sans-serif;
`
export const NavLink = styled(Link) `
    margin: 10%;
    color: #C4A484;
    &:hover{
        color: #FFFFFF
    }
`