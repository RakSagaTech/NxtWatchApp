import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeContainer,
  HomeContent,
  HomeBannerVideos,
  BannerContainer,
  BannerContent,
  BannerNxtWatchLogo,
  BannerText,
  GetItButton,
  CloseButton,
} from './styledComponents'

class Home extends Component {
  state = {
    bannerDisplay: true,
  }

  handleClose = () => {
    this.setState({
      bannerDisplay: false,
    })
  }

  render() {
    const {bannerDisplay} = this.state
    return (
      <HomeContainer>
        <Header />
        <HomeContent>
          <SideBar />
          <HomeBannerVideos>
            <BannerContainer bannerDisplay={bannerDisplay}>
              <BannerContent>
                <BannerNxtWatchLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerText>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerText>
                <GetItButton type="button">GET IT NOW</GetItButton>
              </BannerContent>
              <CloseButton type="button" onClick={this.handleClose}>
                <MdClose style={{width: '100%', height: '100%'}} />
              </CloseButton>
            </BannerContainer>
          </HomeBannerVideos>
        </HomeContent>
      </HomeContainer>
    )
  }
}

export default Home
