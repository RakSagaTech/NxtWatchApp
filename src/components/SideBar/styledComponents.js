import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 230px;
  flex-shrink: 0;
  background-color: ${props =>
    props.theme === 'Light' ? '#ffffff' : '#212121'};
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 968px) {
    width: 250px;
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
  }
`

export const OptionsContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
  margin: 0px;
  padding-top: 24px;
  background-color: ${props =>
    props.theme === 'Light' ? '#ffffff' : '#212121'};
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 18px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({isActive, theme}) => {
    if (!isActive) {
      return 'transparent'
    }

    if (theme === 'Light') {
      return '#f1f5f9'
    }

    if (theme === 'Dark') {
      return '#383838'
    }

    return 'transparent'
  }};
`

export const MenuLabel = styled.label`
  font-family: 'Roboto';
  margin-left: 22px;
  font-size: 14px;
  text-decoration: none;
  font-weight: ${props => (props.isActive ? 600 : 450)};
  color: ${({isActive, theme}) => {
    if (!isActive) {
      return theme === 'Light' ? '#606060' : '#909090'
    }
    // If active, only two theme options exist
    return theme === 'Light' ? '#181818' : '#f1f5f9'
  }};
  @media screen and (min-width: 968px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ContactHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'Light' ? '#1e293b' : '#ffffff')};
  font-size: 16px;
  @media screen and (min-width: 968px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`

export const CompanyLogos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

export const Image = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  margin-bottom: 8px;
  @media screen and (min-width: 968px) {
    width: 34px;
    height: 34px;
  }
  @media screen and (min-width: 1200px) {
    width: 36px;
    height: 36px;
  }
`

export const ContactDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.theme === 'Light' ? '#1e293b' : '#ffffff')};
  font-size: 16px;
  line-height: 1.4;
  font-weight: 460;
  margin-bottom: 0px;
  @media screen and (min-width: 968px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`
