import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingListItem,
  TrendingThumbnail,
  TrendingItemDescription,
  TrendingProfileImg,
  TrendingTitleStatsContainer,
  TrendingTitle,
  TrendingStatsContainer,
  TrendingChannelName,
  TrendingViewsPublishStats,
  TrendingStats,
  TrendingDot,
  TrendingPublishDot,
  TrendingViewsCount,
} from './styledComponents'

import './index.css'

const TrendingItem = props => {
  const {trendingDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
    title,
    id,
  } = trendingDetails
  const {profileImageUrl, name} = channel

  const formattedPublishedYear = formatDistanceToNow(new Date(publishedAt))
  const publishedYearList = formattedPublishedYear.split(' ')
  const publishedYear = ` ${publishedYearList[1]} ${publishedYearList[2]}`
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <TrendingListItem>
              <TrendingThumbnail src={thumbnailUrl} />
              <TrendingItemDescription>
                <TrendingProfileImg src={profileImageUrl} alt="profile" />
                <TrendingTitleStatsContainer>
                  <TrendingTitle theme={theme}>{title}</TrendingTitle>
                  <TrendingStatsContainer>
                    <TrendingChannelName theme={theme}>
                      {name}
                    </TrendingChannelName>
                    <TrendingViewsPublishStats>
                      <TrendingStats>
                        <TrendingDot theme={theme} />
                        <TrendingViewsCount theme={theme}>
                          {viewCount} views
                        </TrendingViewsCount>
                      </TrendingStats>
                      <TrendingStats>
                        <TrendingPublishDot theme={theme} />
                        <TrendingViewsCount theme={theme}>
                          {publishedYear} ago
                        </TrendingViewsCount>
                      </TrendingStats>
                    </TrendingViewsPublishStats>
                  </TrendingStatsContainer>
                </TrendingTitleStatsContainer>
              </TrendingItemDescription>
            </TrendingListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingItem
