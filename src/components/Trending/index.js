import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingItem from '../TrendingItem'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  TrendingContent,
  TrendingTitleVideos,
  TitleContainer,
  TrendingLogo,
  Title,
  TrendigListContainer,
  LoaderContainer,
  TrendingList,
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingList: [],
  }

  componentDidMount() {
    this.fetchTrendingListData()
  }

  fetchTrendingListData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
          trendingList: formattedData,
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
    this.fetchTrendingListData()
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

  renderVideosListView = () => {
    const {trendingList} = this.state
    return (
      <TrendingList>
        {trendingList.map(eachVideo => (
          <TrendingItem key={eachVideo.id} trendingDetails={eachVideo} />
        ))}
      </TrendingList>
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
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <TrendingContainer>
              <Header />
              <TrendingContent theme={theme}>
                <SideBar />
                <TrendingTitleVideos theme={theme}>
                  <TitleContainer theme={theme}>
                    <TrendingLogo theme={theme}>
                      <HiFire style={{width: '100%', height: '100%'}} />
                    </TrendingLogo>
                    <Title theme={theme}>Trending</Title>
                  </TitleContainer>
                  <TrendigListContainer theme={theme}>
                    {this.renderVideosView()}
                  </TrendigListContainer>
                </TrendingTitleVideos>
              </TrendingContent>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
