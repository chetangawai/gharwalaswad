import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faReddit, faWhatsapp, faPinterest } from '@fortawesome/free-brands-svg-icons';
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	RedditShareButton,
	PinterestShareButton,
} from 'react-share';

import './Share.scss';
import styled from '@emotion/styled';

const ShareContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  a {
    margin: 0 1rem 1rem 0;
    color: ${props => props.theme.colors.black.blue};
    padding: 0.3rem 0.6rem;
    background: ${props => props.theme.colors.white.grey};
    border-radius: 10px;
    &:hover {
      color: ${props => props.theme.colors.white.light};
      background: ${props => props.theme.colors.primary.light};
      border: ${props => props.theme.colors.primary.light};
    }
  }
`;

const twitterColor = '#1da1f2';
const facebookColor = '#3b5998';
const pinterestColor = '#E60024';
const redditColor = '#ff4500';
const whatsappColor = '#128c7e';

const FacebookSpan = styled.span`
color: ${facebookColor};
border-color: ${facebookColor};
&:hover {
	background-color: ${facebookColor};
	border-color: ${facebookColor};
	color: #fff;
}`;
const TwitterSpan = styled.span`
color: ${twitterColor};
border-color: ${twitterColor};
&:hover {
	background-color: ${twitterColor};
	border-color:${twitterColor};
	color: #fff;
}`;
const PinterestSpan = styled.span`
color: ${pinterestColor};
border-color: ${pinterestColor};
&:hover {
	background-color: ${pinterestColor};
	border-color: ${pinterestColor};
	color: #fff;
}`;
const RedditSpan = styled.span`
color: ${redditColor};
border-color: ${redditColor};
&:hover {
	background-color: ${redditColor};
	border-color: ${redditColor};
	color: #fff;
}`;
const WhatsappSpan = styled.span`
color: ${whatsappColor};
border-color: ${whatsappColor};
&:hover {
	background-color: ${whatsappColor};
	border-color: ${whatsappColor};
	color: #fff;
}`;
const ShareText = styled.div`
margin: 0.5rem 0.25rem;
`
const Share = ({ socialConfig, tags }) => (
	<ShareContainer className="post-social">
		<ShareText>Share on :</ShareText>
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" quote={socialConfig.config.title}>
			<FacebookSpan className="icon">
				<FontAwesomeIcon icon={faFacebookF} />
			</FacebookSpan>
		</FacebookShareButton>
		<PinterestShareButton url={socialConfig.config.url} media={socialConfig.config.url} className="button is-outlined is-rounded facebook" title={socialConfig.config.title} >
			<PinterestSpan className="icon">
				<FontAwesomeIcon icon={faPinterest} />
			</PinterestSpan>
		</PinterestShareButton>
		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
			<TwitterSpan className="icon">
				<FontAwesomeIcon icon={faTwitter} />
			</TwitterSpan>
		</TwitterShareButton>
		<RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
			<RedditSpan className="icon">
				<FontAwesomeIcon icon={faReddit} />
			</RedditSpan>
		</RedditShareButton>
		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
			<WhatsappSpan className="icon">
				<FontAwesomeIcon icon={faWhatsapp} />
			</WhatsappSpan>
		</WhatsappShareButton> 
	</ShareContainer>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;