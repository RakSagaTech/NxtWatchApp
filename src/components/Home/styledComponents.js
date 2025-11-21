import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: '#f8fafc';
  height: 100vh;
  width: 100vw;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const HomeBannerVideos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  display: ${props => (props.bannerDisplay === true ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 30px;
  @media screen and (min-width: 768px) {
    background-size: cover;
    padding: 30px 26px;
    background-position: center;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const BannerNxtWatchLogo = styled.img`
  width: 146px;
  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  line-height: 1.6;
  color: #1e293b;
  width: 80%;
  margin-bottom: 30px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    width: 92%;
    font-weight: 500;
  }
`
export const GetItButton = styled.button`
  display: flex;
  justify-content: center:
  align-items: center;
  font-family: "Roboto";
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #1e293b;
  @media screen and (min-width: 768px){
    padding: 10px 16px;
    background-color: #ffffff;
    font-size: 15px;
  }
  @media screen and (min-width: 1200px){
    padding: 12px 16px;
  }
`

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`
