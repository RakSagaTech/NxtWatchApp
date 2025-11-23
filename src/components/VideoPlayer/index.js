import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'
import SaveContext from '../../context/SaveContext'

import {
  VideoHeader,
  VideoSideBar,
  VideoContainer,
  VideoPlayerContainer,
  VideoPlayerDescription,
  VideoPlayerTitle,
  VideoPlayerStats,
  ViewsSubscribers,
  VideoPlayerViews,
  VideoPlayerPublished,
  VideoPlayerDot,
  VideoPlayerPublish,
  LikeDisLikeSave,
  Button,
  ButtonName,
  HorizontalLine,
  ProfileChannel,
  ProfileImage,
  ChannelSubscriber,
  ChannelName,
  Subscriber,
  Description,
  LoaderContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureView,
  FailureRetryButton,
  Icon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoPlayer extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoObject: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok === true) {
        const video = data.video_details
        const formattedData = {
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
            subscriberCount: video.channel.subscriber_count,
          },
          description: video.description,
          id: video.id,
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          videoUrl: video.video_url,
          viewCount: video.view_count,
        }
        this.setState({
          videoObject: formattedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleRetry = () => {
    this.fetchVideoDetails()
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
          <FailureView theme={theme}>
            <FailureImg src={failureImg} alt="no videos" />
            <FailureHeading theme={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureRetryButton
              theme={theme}
              type="button"
              onClick={this.handleRetry}
            >
              Retry
            </FailureRetryButton>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  handleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }))
  }

  handleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
    }))
  }

  renderVideoView = () => {
    const {videoObject} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoObject
    const {name, profileImageUrl, subscriberCount} = channel

    const formattedPublishedYear = formatDistanceToNow(new Date(publishedAt))
    const publishedYearList = formattedPublishedYear.split(' ')
    const publishedYear = ` ${publishedYearList[1]} ${publishedYearList[2]}`
    return (
      <ThemeContext.Consumer>
        {themeValue => {
          const {theme} = themeValue
          return (
            <SaveContext.Consumer>
              {saveValue => {
                const {handleSave, savedVideosList} = saveValue
                const isSaved = savedVideosList.find(
                  each => each.id === videoObject.id,
                )
                return (
                  <VideoContainer theme={theme}>
                    <VideoPlayerContainer>
                      <ReactPlayer url={videoUrl} width="100%" height="100%" />
                    </VideoPlayerContainer>
                    <VideoPlayerDescription>
                      <VideoPlayerTitle theme={theme}>{title}</VideoPlayerTitle>
                      <VideoPlayerStats>
                        <ViewsSubscribers>
                          <VideoPlayerViews theme={theme}>
                            {viewCount} views
                          </VideoPlayerViews>
                          <VideoPlayerPublished>
                            <VideoPlayerDot />
                            <VideoPlayerPublish theme={theme}>
                              {publishedYear} ago
                            </VideoPlayerPublish>
                          </VideoPlayerPublished>
                        </ViewsSubscribers>
                        <LikeDisLikeSave>
                          <Button theme={theme} onClick={this.handleLike}>
                            <Icon>
                              <BiLike style={{width: '100%', height: '100%'}} />
                            </Icon>
                            <ButtonName>Like</ButtonName>
                          </Button>
                          <Button theme={theme} onClick={this.handleDislike}>
                            <Icon>
                              <BiDislike
                                style={{width: '100%', height: '100%'}}
                              />
                            </Icon>
                            <ButtonName>Dislike</ButtonName>
                          </Button>
                          <Button
                            theme={theme}
                            type="button"
                            onClick={() => handleSave(videoObject)}
                          >
                            <Icon>
                              <MdPlaylistAdd
                                style={{width: '100%', height: '100%'}}
                              />
                            </Icon>
                            <ButtonName>
                              {isSaved ? 'Saved' : 'Save'}
                            </ButtonName>
                          </Button>
                        </LikeDisLikeSave>
                      </VideoPlayerStats>
                      <HorizontalLine theme={theme} />
                      <ProfileChannel>
                        <ProfileImage src={profileImageUrl} />
                        <ChannelSubscriber>
                          <ChannelName theme={theme}>{name}</ChannelName>
                          <Subscriber theme={theme}>
                            {subscriberCount} subscribers
                          </Subscriber>
                        </ChannelSubscriber>
                      </ProfileChannel>
                      <Description theme={theme}>{description}</Description>
                    </VideoPlayerDescription>
                  </VideoContainer>
                )
              }}
            </SaveContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
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

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideoView()
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
            <VideoHeader>
              <Header />
              <VideoSideBar theme={theme}>
                <SideBar />
                {this.renderVideoDetailsView()}
              </VideoSideBar>
            </VideoHeader>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoPlayer
