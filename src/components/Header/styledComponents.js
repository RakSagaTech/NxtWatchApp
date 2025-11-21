import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  background-color: ${props =>
    props.theme === 'Light' ? '#ffffff' : '#212121'};
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  margin: 0px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 30px;
  }
`

export const HeaderNxtWatchLogo = styled.img`
  width: 106px;
  @media screen and (min-width: 768px){
  width: 120px;
}
  @media screen and (min-width: 968px) {
    width: 126px;
  }
  @media screen and (min-width: 1200px) {
    width: 132px;
 
  }
`

export const MobileHeaderIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0px;
  margin-left: 18px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#ffffff')};
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    margin-left: 26px;
  }
`
export const DesktopHeaderIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileLogo = styled.img`
  width: 30px;
  height: 30px;
`

export const LogoutButton = styled.button`
  font-family: 'Roboto';
  padding: 4px 14px;
  font-weight: bold;
  margin-left: 27px;
  background-color: transparent;
  font-size: 16px;
  border-radius: 2px;
  border: ${props =>
    props.theme === 'Light' ? '1px solid #3b82f6' : '1px solid #ffffff'};
  color: ${props => (props.theme === 'Light' ? '#3b82f6' : '#ffffff')};
`
