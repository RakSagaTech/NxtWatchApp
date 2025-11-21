import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  VideoListItem,
  VideoThumbnail,
  VideoItemDescription,
  ProfileImg,
  TitleStatsContainer,
  VideoTitle,
  StatsContainer,
  ChannelName,
  ViewsStats,
  ViewsDot,
  VideoViews,
  DotContainer,
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
            <ViewsStats>
              <ViewsDot>
                <BsDot styled={{width: '100%', height: '100'}} size={20} />
                <VideoViews>{viewCount} views</VideoViews>
              </ViewsDot>
              <DotContainer>
                <BsDot styled={{width: '100%', height: '100'}} size={20} />
                <VideoViews>{publishedYear} ago</VideoViews>
              </DotContainer>
            </ViewsStats>
          </StatsContainer>
        </TitleStatsContainer>
      </VideoItemDescription>
    </VideoListItem>
  )
}

export default VideoItem
