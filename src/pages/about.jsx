import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Me'} />
    <Header title="About Me"></Header>
    <Container center={center}>
      <h3>
       Hello Foodies,
      </h3>
      <p>I am Chetan, a full-time Software Professional on weekdays and a Chef on weekends.</p>
      <p>
        Welcome to my food blog. Thanks for stopping by. 
      </p>
      <p>
        Here you will find all the recipes which I have experimented in my kitchen and have been served to my family.

        Some of the recipes I have learned from my Mom, Mother-in-law and Sister.
      </p>
      <p>
        Hope these recipes help you and inspire you in cooking.
      </p>
      <p>Happy Cooking!</p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
