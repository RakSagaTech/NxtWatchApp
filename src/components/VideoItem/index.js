import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoListItem,
  VideoThumbnail,
  VideoItemDescription,
  ProfileImg,
  TitleStatsContainer,
  VideoTitle,
  StatsContainer,
  ChannelName,
  ViewsPublishStats,
  Stats,
  Dot,
  PublishDot,
  ViewsCount,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
    title,
    id,
  } = videoDetails
  const {profileImageUrl, name} = channel

  const formattedPublishedYear = formatDistanceToNow(new Date(publishedAt))
  const publishedYearList = formattedPublishedYear.split(' ')
  const publishedYear = ` ${publishedYearList[1]} ${publishedYearList[2]}`
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <VideoListItem>
            <Link to={`/videos/${id}`}>
              <VideoThumbnail src={thumbnailUrl} />
              <VideoItemDescription>
                <ProfileImg src={profileImageUrl} alt="profile" />
                <TitleStatsContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <StatsContainer>
                    <ChannelName theme={theme}>{name}</ChannelName>
                    <ViewsPublishStats>
                      <Stats>
                        <Dot theme={theme} />
                        <ViewsCount theme={theme}>{viewCount} views</ViewsCount>
                      </Stats>
                      <Stats>
                        <PublishDot theme={theme} />
                        <ViewsCount theme={theme}>
                          {publishedYear} ago
                        </ViewsCount>
                      </Stats>
                    </ViewsPublishStats>
                  </StatsContainer>
                </TitleStatsContainer>
              </VideoItemDescription>
            </Link>
          </VideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
