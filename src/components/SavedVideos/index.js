import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoItem from '../SavedVideoItem'

import ThemeContext from '../../context/ThemeContext'
import SaveContext from '../../context/SaveContext'
import {
  SavedVideosContainer,
  SavedVideosSideBarContent,
  SavedTitleVideos,
  SavedTitleContainer,
  SavedVideoLogo,
  SavedVideoTitle,
  SavedVideosContent,
  NoSavedContainer,
  NoSavedImg,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'

const SavedVideos = () => {
  const renderNoSavedVideosView = () => (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <NoSavedContainer>
              <NoSavedImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedHeading theme={theme}>
                No saved videos found
              </NoSavedHeading>
              <NoSavedDescription theme={theme}>
                You can save your videos while watching them
              </NoSavedDescription>
            </NoSavedContainer>
          )
        }}
      </ThemeContext.Consumer>
    )

  const renderSavedVideosView = () => (
      <SaveContext.Consumer>
        {saveValue => {
          const {savedVideosList} = saveValue
          return (
            <ThemeContext.Consumer>
              {themeValue => {
                const {theme} = themeValue
                return (
                  <SavedTitleVideos theme={theme}>
                    <SavedVideosContent theme={theme}>
                      {savedVideosList.length === 0 ? (
                        renderNoSavedVideosView()
                      ) : (
                        <>
                          <SavedTitleContainer theme={theme}>
                            <SavedVideoLogo theme={theme}>
                              <HiFire style={{width: '100%', height: '100%'}} />
                            </SavedVideoLogo>
                            <SavedVideoTitle theme={theme}>
                              Saved Videos
                            </SavedVideoTitle>
                          </SavedTitleContainer>
                          {savedVideosList.map(eachVideo => (
                            <SavedVideoItem
                              key={eachVideo.id}
                              savedVideoDetails={eachVideo}
                            />
                          ))}
                        </>
                      )}
                    </SavedVideosContent>
                  </SavedTitleVideos>
                )
              }}
            </ThemeContext.Consumer>
          )
        }}
      </SaveContext.Consumer>
    )

  return (
    <SaveContext.Consumer>
      {saveValue => {
        const {savedVideosList} = saveValue
        return (
          <ThemeContext.Consumer>
            {value => {
              const {theme} = value
              return (
                <SavedVideosContainer>
                  <Header />
                  <SavedVideosSideBarContent theme={theme}>
                    <SideBar />
                    {renderSavedVideosView()}
                  </SavedVideosSideBarContent>
                </SavedVideosContainer>
              )
            }}
          </ThemeContext.Consumer>
        )
      }}
    </SaveContext.Consumer>
  )
}

export default SavedVideos
