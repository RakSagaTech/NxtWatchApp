import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {
  NavBarContainer,
  HeaderContent,
  HeaderNxtWatchLogo,
  MobileHeaderIcons,
  DesktopHeaderIcons,
  IconButton,
  ProfileLogo,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const logoutUserHandler = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, changeTheme} = value
        console.log(theme)
        const headerLogo =
          theme === 'Light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        const themeIcon =
          theme === 'Light' ? (
            <FaMoon style={{width: '100%', height: '100%'}} />
          ) : (
            <FiSun style={{width: '100%', height: '100%'}} />
          )
        return (
          <NavBarContainer theme={theme}>
            <HeaderContent>
              <HeaderNxtWatchLogo src={headerLogo} alt="nxt watch logo" />
              <MobileHeaderIcons>
                <IconButton type="button" theme={theme} onClick={changeTheme}>
                  {themeIcon}
                </IconButton>
                <IconButton type="button" theme={theme}>
                  <GiHamburgerMenu style={{width: '100%', height: '100%'}} />
                </IconButton>

                <div>
                  <Popup
                    modal
                    trigger={
                      <IconButton type="button" theme={theme}>
                        <FiLogOut style={{width: '100%', height: '100%'}} />
                      </IconButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <>
                        <div>
                          <p className="popup-text">
                            Are you sure you want to logout?
                          </p>
                        </div>
                        <div className="buttons-container">
                          <button
                            type="button"
                            className="button cancel-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="button confirm-button"
                            onClick={() => logoutUserHandler()}
                          >
                            Confirm
                          </button>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>
              </MobileHeaderIcons>
              <DesktopHeaderIcons>
                <IconButton type="button" theme={theme} onClick={changeTheme}>
                  {themeIcon}
                </IconButton>
                <IconButton type="button">
                  <ProfileLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </IconButton>
                <div>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton type="button" theme={theme}>
                        Logout
                      </LogoutButton>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <>
                        <div>
                          <p className="popup-text">
                            Are you sure you want to logout?
                          </p>
                        </div>
                        <div className="buttons-container">
                          <button
                            type="button"
                            className="button cancel-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="button confirm-button"
                            onClick={() => logoutUserHandler()}
                          >
                            Confirm
                          </button>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>
              </DesktopHeaderIcons>
            </HeaderContent>
          </NavBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
