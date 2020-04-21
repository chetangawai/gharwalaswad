import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.black.light};
`;

const Link = styled.a`
  color: black;
  padding: 5px;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <div className="icon">
        Follow me on
        <div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/gharwalaswad/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Gharwalaswad"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        </div>  
      </div>
    </Text>
  </Wrapper>
);
export default Footer;
