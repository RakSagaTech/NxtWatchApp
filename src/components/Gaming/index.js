import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingItem from '../GamingItem'
import ThemeContext from '../../context/ThemeContext'

import {
  GamingContainer,
  GamingContent,
  GamingTitleVideos,
  GamingTitleContainer,
  GamingLogo,
  GamingTitle,
  LoaderContainer,
  GamingList,
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

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingList: [],
  }

  componentDidMount() {
    this.fetchGamingListData()
  }

  fetchGamingListData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        const formattedData = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          viewCount: eachVideo.view_count,
        }))
        this.setState({
          gamingList: formattedData,
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
    this.fetchGamingListData()
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

  renderGamingListView = () => {
    const {gamingList} = this.state
    return (
      <GamingList>
        {gamingList.map(eachVideo => (
          <GamingItem key={eachVideo.id} gamingDetails={eachVideo} />
        ))}
      </GamingList>
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
        return this.renderGamingListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <GamingContainer theme={theme}>
              <Header />
              <GamingContent theme={theme}>
                <SideBar />
                <GamingTitleVideos theme={theme}>
                  <GamingTitleContainer theme={theme}>
                    <GamingLogo theme={theme}>
                      <SiYoutubegaming
                        style={{width: '100%', height: '100%'}}
                      />
                    </GamingLogo>
                    <GamingTitle theme={theme}>Gaming</GamingTitle>
                  </GamingTitleContainer>
                  {this.renderVideosView()}
                </GamingTitleVideos>
              </GamingContent>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
