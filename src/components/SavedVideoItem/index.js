import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideo,
  SavedVideoThumbnail,
  SavedVideoDescription,
  SavedVideoProfileImg,
  SavedVideoTitleStatsContainer,
  SavedVideoTitle,
  SavedVideoStatsContainer,
  SavedVideoChannelName,
  SavedVideoViewsPublishStats,
  SavedVideoStats,
  SavedVideoDot,
  SavedVideoViewsCount,
  SavedVideoPublishDot,
} from './styledComponents'

const SavedVideoItem = props => {
  const {savedVideoDetails} = props
  const {
    title,
    thumbnailUrl,
    profileImageUrl,
    channel,
    viewCount,
    publishedYear,
  } = savedVideoDetails
  const {name} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <SavedVideo>
            <SavedVideoThumbnail src={thumbnailUrl} />
            <SavedVideoDescription>
              <SavedVideoProfileImg src={profileImageUrl} alt="profile" />
              <SavedVideoTitleStatsContainer>
                <SavedVideoTitle theme={theme}>{title}</SavedVideoTitle>
                <SavedVideoStatsContainer>
                  <SavedVideoChannelName theme={theme}>
                    {name}
                  </SavedVideoChannelName>
                  <SavedVideoViewsPublishStats>
                    <SavedVideoStats>
                      <SavedVideoDot />
                      <SavedVideoViewsCount theme={theme}>
                        {viewCount} views
                      </SavedVideoViewsCount>
                    </SavedVideoStats>
                    <SavedVideoStats>
                      <SavedVideoPublishDot />
                      <SavedVideoViewsCount theme={theme}>
                        {publishedYear} ago
                      </SavedVideoViewsCount>
                    </SavedVideoStats>
                  </SavedVideoViewsPublishStats>
                </SavedVideoStatsContainer>
              </SavedVideoTitleStatsContainer>
            </SavedVideoDescription>
          </SavedVideo>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
