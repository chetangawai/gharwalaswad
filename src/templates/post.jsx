import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
import '../styles/prism';
import Img from 'gatsby-image';
import Share from '../components/Share';
import config from '../../config/site'

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const Image = styled.div`
  margin: auto;
  margin-bottom: 50px;
  position: relative;
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  border-radius: ${props => props.theme.borderRadius.default};
  min-height: 630px;
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: scale(1.04);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${props => props.theme.borderRadius.default};
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${props => props.theme.colors.primary.dark};
    }
  }
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.black.light};
  &:hover {
    color: #ffb1ad;
  }
`;

const Post = ({ data, pageContext }) => {
  const { next, prev, pathSlug } = pageContext;
  const {url, twitterHandle } = config;
  const { html, frontmatter, excerpt } = data.markdownRemark;
  const { date, title, tags, path, description } = frontmatter;
  const image = frontmatter.cover.childImageSharp.fluid;
  const seoImage = frontmatter.cover.childImageSharp.fluid.src;
  const otherImage = frontmatter.images
    ? frontmatter.images.childImageSharp.fluid
    : null;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={seoImage}
        pathname={`${url}${pathSlug}`}
        article
      />
      <Header title={title} cover={image} date={date} />
      <Container>
        <Image>
            <Img fluid={image} />
        </Image>
        <Content input={html} />
        {otherImage && (
          <Image>
              <Img fluid={otherImage} />
          </Image>
        )}
        <TagsBlock list={tags || []} />
        <Share
				socialConfig={{
					twitterHandle,
					config: {
            url: `${url}${pathSlug}?${Math.random()}`,
						title,
					},
				}}
				tags={tags}
			/>
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <StyledLink to={prev.frontmatter.path}>
              <p>Previous ( {prev.frontmatter.title} )</p>
            </StyledLink>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <StyledLink to={next.frontmatter.path}>
              <p> Next ( {next.frontmatter.title} )</p>
            </StyledLink>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        tags
        images {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, traceSVG: { color: "#2B2B2F" }) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
