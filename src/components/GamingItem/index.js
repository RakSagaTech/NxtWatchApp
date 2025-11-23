import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingListItem,
  GamingThumbnailUrl,
  GamingTitle,
  GamingViews,
} from './styledComponents'

const GamingItem = props => {
  const {gamingDetails} = props
  const {thumbnailUrl, viewCount, title, id} = gamingDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <GamingListItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <GamingThumbnailUrl src={thumbnailUrl} />
              <GamingTitle theme={theme}>{title}</GamingTitle>
              <GamingViews theme={theme}>
                {viewCount} Watching Worldwide
              </GamingViews>
            </Link>
          </GamingListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingItem
