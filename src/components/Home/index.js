import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
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
  LoaderContainer,
  VideosList,
  SearchResultView,
  SearchResultImg,
  SearchHeading,
  SearchDescription,
  SearchRetryButton,
  FailureView,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    bannerDisplay: true,
    searchInputValue: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.fetchVideoListsData()
  }

  fetchVideoListsData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInputValue} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok) {
        const formattedData = data.videos.map(eachVideo => ({
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
        }))
        this.setState({
          videosList: formattedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleRetry = () => {
    this.fetchVideoListsData()
  }

  handleSearch = event => {
    const searchValue = event.target.value
    this.setState({searchInputValue: searchValue}, () => {
      if (searchValue === '') {
        this.fetchVideoListsData()
      }
    })
  }

  handleSearchClick = () => {
    this.fetchVideoListsData()
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.fetchVideoListsData()
    }
  }

  handleClose = () => {
    this.setState({
      bannerDisplay: false,
    })
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        const failureImg =
          theme === 'Light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureView>
            <FailureImg src={failureImg} alt="no videos" />
            <FailureHeading theme={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureRetryButton type="button" onClick={this.handleRetry}>
              Retry
            </FailureRetryButton>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSearchResultView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <SearchResultView theme={theme}>
            <SearchResultImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="failure"
            />
            <SearchHeading theme={theme}>No Search results found</SearchHeading>
            <SearchDescription theme={theme}>
              Try different key words or remove search filter
            </SearchDescription>
            <SearchRetryButton type="button" onClick={this.handleRetry}>
              Retry
            </SearchRetryButton>
          </SearchResultView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosListView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderSearchResultView()
    }
    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <LoaderContainer
            className="loader-container"
            data-testid="loader"
            theme={theme}
          >
            <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
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
                    {this.renderVideosView()}
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
