import {formatDistanceToNow} from 'date-fns'
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
  const {thumbnailUrl, channel, viewCount, publishedAt, title} = videoDetails
  const {profileImageUrl, name} = channel

  const formattedPublishedYear = formatDistanceToNow(new Date(publishedAt))
  const publishedYearList = formattedPublishedYear.split(' ')
  const publishedYear = ` ${publishedYearList[1]} ${publishedYearList[2]}`
  return (
    <VideoListItem>
      <VideoThumbnail src={thumbnailUrl} />
      <VideoItemDescription>
        <ProfileImg src={profileImageUrl} alt="profile" />
        <TitleStatsContainer>
          <VideoTitle>{title}</VideoTitle>
          <StatsContainer>
            <ChannelName>{name}</ChannelName>
            <ViewsPublishStats>
              <Stats>
                <Dot />
                <ViewsCount>{viewCount} views</ViewsCount>
              </Stats>
              <Stats>
                <PublishDot />
                <ViewsCount>{publishedYear} ago</ViewsCount>
              </Stats>
            </ViewsPublishStats>
          </StatsContainer>
        </TitleStatsContainer>
      </VideoItemDescription>
    </VideoListItem>
  )
}

export default VideoItem
