import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter, faYoutube, faPinterest, faReddit } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.footer`
  margin: 0;
  color: ${props => props.theme.colors.black.light};
  padding-bottom: 2rem;
  position: relative;
  width: 100%;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 1rem;
  }
  padding: 2rem;
`;

const Text = styled.div`
  margin-left: auto;
  order: 2;
  float: right;
`;

const Link = styled.a`
  color: black;
  padding: 5px;
  float: left;
`;

const Copyright = styled.div`
  align-items: flex-end;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <div className="icon">
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
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/gharwalaswad"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UC4gJ0K54-_pKeo8435pPZ3Q"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=" https://in.pinterest.com/gharwalaswad"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=" https://in.pinterest.com/gharwalaswad/"
          >
            <FontAwesomeIcon icon={faReddit} />
          </Link>
        </div>
      </div>
    </Text>
    <Copyright>Copyright @ 2020 Gharwalaswad</Copyright>
  </Wrapper>
);
export default Footer;
