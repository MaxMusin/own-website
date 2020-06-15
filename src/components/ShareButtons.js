import React from 'react'
import styled from 'styled-components'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'
import LinkedIn from '../assets/linkedin.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'

const ShareButtonsWrapper = styled.div`
  >button {
    margin-left: 10px;
    background: blue;
    
    svg{
      width: 32px;
      height: 32px;
    }
  }
`

export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <ShareButtonsWrapper>
    <FacebookShareButton url={url}>
      <Facebook />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <Twitter />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedIn />
    </LinkedinShareButton>
  </ShareButtonsWrapper>
)

export default ShareButtons