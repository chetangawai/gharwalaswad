import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import config from '../../config/site.js'

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.black.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const Logo = styled.img`
width: 80px;
@media screen (max-width: ${props => props.theme.breakpoints.s}), 
(max-width: ${props => props.theme.breakpoints.xs}), 
(max-width: ${props => props.theme.breakpoints.m}) {
  width: 40px;
}
@media screen (max-width: ${props => props.theme.breakpoints.l}) {
  width: 60px;
}
`
const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <Logo src={config.logo} alt="Gharwalaswad Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about">About me</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
