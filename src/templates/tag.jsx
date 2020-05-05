import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import config from '../../config/site';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black.light};
  &:hover {
    color: #ffb1ad;
  }
`;

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      <Helmet title={`${upperTag} | ${config.title}`} />
      <Header title={upperTag}>
      </Header>
      <Container>
        <Information>
          {posts.map((post, index) => (
            <StyledLink key={index} to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </StyledLink>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string,
  }),
};
