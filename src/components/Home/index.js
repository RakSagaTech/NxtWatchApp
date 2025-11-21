import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

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
  VideosListContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
} from './styledComponents'

class Home extends Component {
  state = {
    bannerDisplay: true,
    searchInputValue: '',
  }

  handleSearch = event => {
    const searchValue = event.target.value
    this.setState({searchInputValue: searchValue}, () => {
      if (searchValue === '') {
        this.fetchVideosDetails()
      }
    })
  }

  handleSearchClick = () => {
    this.fetchVideosDetails()
  }

  handleClose = () => {
    this.setState({
      bannerDisplay: false,
    })
  }

  render() {
    const {bannerDisplay, searchInputValue} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
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
                  <VideosListContainer theme={theme}>
                    <SearchInputContainer theme={theme}>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        theme={theme}
                        onChange={this.handleSearch}
                        value={searchInputValue}
                        onKeyDown={this.handleKeyDown}
                      />
                      <SearchButton
                        type="button"
                        theme={theme}
                        onClick={this.handleSearchClick}
                      >
                        <AiOutlineSearch size={16} />
                      </SearchButton>
                    </SearchInputContainer>
                  </VideosListContainer>
                </HomeBannerVideos>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
