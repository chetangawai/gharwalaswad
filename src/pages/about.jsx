import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import profilepic from '../../static/profilepic.jpg';
import styled from '@emotion/styled';

const ProfilePic = styled.img`
  width: 25%;
  border-radius: 80px;
`;

const About = center => (
  <Layout>
    <Helmet title={'About Me'} />
    <Header title="About Me"></Header>

    <Container center={center}>
      <ProfilePic src={profilepic} alt="Profile Picture" />
      <h3>Hello Foodies,</h3>
      <p>
        I am Chetan, a full-time Software Professional on weekdays and a Chef on
        weekends.
      </p>
      <p>Welcome to my food blog and thanks for stopping by!</p>
      <p>
        Here, you will find all the recipes which I have cooked in my home
        kitchen. My family has been my taste-tester. The motto behind this blog
        is to keep track of all the recipes I have learned from my mom,
        mother-in-law, sister and my own 😜.
      </p>
      <div>
        <h6>How did I start blogging?</h6>
        <p>
          My husband and colleagues used to appreciate my cooking. One fine day
          I posted a picture of dish prepared by me on Instagram. I got lot of
          likes which further motivated me to start blogging. My husband pushed
          me up to build a blogging website along with posting recipes on
          Instagram. March-April 2020 was a lockdown period in most of the countries as the
          deadly Corona virus gripped the complete world. I used this surplus time to build this
          blogging website. From then I am regularly posting my recipes.
        </p>
      </div>
      <p>Hope these recipes help you and inspire you in cooking.</p>
      <p>Happy Cooking!</p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
