import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import MenuContext from '../../context/MenuContext'

import {
  SideBarContainer,
  OptionsContact,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLabel,
  ContactContainer,
  ContactHeading,
  CompanyLogos,
  Image,
  ContactDescription,
} from './styledComponents'

const menuOptions = [
  {
    id: 'HOME',
    label: 'Home',
    Icon: AiFillHome,
  },
  {
    id: 'TRENDING',
    label: 'Trending',
    Icon: HiFire,
  },
  {
    id: 'GAMING',
    label: 'Gaming',
    Icon: SiYoutubegaming,
  },
  {
    id: 'SAVED_VIDEOS',
    label: 'Saved videos',
    Icon: MdPlaylistAdd,
  },
]

const getIconColor = (isActive, theme) => {
  if (isActive) return '#ff0b37'
  return theme === 'Light' ? '#606060' : '#909090'
}

const SideBar = () => (
  <ThemeContext.Consumer>
    {themeValue => {
      const {theme} = themeValue
      return (
        <MenuContext.Consumer>
          {menuValue => {
            const {activeMenuId, changeMenu} = menuValue
            return (
              <SideBarContainer theme={theme}>
                <OptionsContact>
                  <MenuList theme={theme}>
                    {menuOptions.map(eachOption => {
                      const {id, label, Icon} = eachOption
                      const isActive = eachOption.id === activeMenuId
                      return (
                        <MenuItem key={id}>
                          <MenuButton
                            type="button"
                            isActive={isActive}
                            theme={theme}
                            onClick={() => changeMenu(id)}
                          >
                            <Icon
                              size={17}
                              color={getIconColor(isActive, theme)}
                            />
                            <MenuLabel isActive={isActive} theme={theme}>
                              {label}
                            </MenuLabel>
                          </MenuButton>
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                  <ContactContainer>
                    <ContactHeading theme={theme}>CONTACT US</ContactHeading>
                    <CompanyLogos>
                      <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook"
                      />
                      <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                      <Image
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </CompanyLogos>
                    <ContactDescription theme={theme}>
                      Enjoy! Now to see your channels and recommendations!
                    </ContactDescription>
                  </ContactContainer>
                </OptionsContact>
              </SideBarContainer>
            )
          }}
        </MenuContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
