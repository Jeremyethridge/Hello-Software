
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #FF0000;
    color: #000000;
    display: flex;
    height: 50px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    font family: Tahoma,Verdana,Segoe,sans-serif;
`
export const NavLink = styled(Link) `
    margin: 50px;
    color: #000000;
    &:hover{
        color: #FFFFFF
    }
`