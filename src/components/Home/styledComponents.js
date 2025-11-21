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
  font-size: 16px;
  line-height: 1.6;
  color: #1e293b;
  width: 80%;
  margin-bottom: 30px;
  font-weight: 400;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
    width: 92%;
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

export const VideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#181818'};
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 968px) {
    padding: 30px;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  margin-top: 14px;
  margin-left: 16px;
  margin-right: 16px;
  border: ${props =>
    props.theme === 'Light' ? '0.5px solid #cccccc' : '0.2px solid #606060'};
  @media screen and (min-width: 768px) {
    height: 28px;
    width: 250px;
    margin: 0px;
  }
  @media screen and (min-width: 968px) {
    height: 30px;
    width: 330px;
    margin: 0px;
  }
  @media screen and (min-width: 1200px) {
    height: 32px;
    width: 430px;
    margin: 0px;
  }
  @media screen and (min-width: 1580px) {
    height: 34px;
    width: 780px;
    margin: 0px;
  }
`

export const SearchInput = styled.input`
  font-family: 'Roboto';
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  color: #606060;
  background-color: ${props =>
    props.theme === 'Light' ? '#f1f5f9' : '#181818'};
  padding: 10px 14px;

  @media screen and (min-width: 968px) {
    font-size: 16px;
  }
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0px 28px;
  border: none;
  outline: none;
  cursor: pointer;
  border-left: ${props =>
    props.theme === 'Light' ? '2px solid #cccccc' : '2px solid #606060'};
  color: #606060;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#313131'};
  @media screen and (min-width: 768px) {
    padding: 0px 18px;
  }
  @media screen and (min-width: 968px) {
    padding: 0px 22px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0px 26px;
  }
  @media screen and (min-width: 1580px) {
    padding: 0px 46px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const VideosList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 20px;
  }
  @media screen and (min-width: 968px) {
    flex-direction: row;
    margin-top: 30px;
  }
`

export const SearchResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center:
  align-items: center;
  align-self: center;
  height: 100%;
  width: 100%;
  padding: 40px;
`

export const SearchResultImg = styled.img`
  width: 200px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 968px) {
    width: 300px;
  }
`

export const SearchHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  align-self: center;
  margin-top: 30px;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#ffffff')};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
  @media screen and (min-width: 968px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`

export const SearchDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  align-self: center;
  text-align: center;
  font-size: 16px;
  margin: 0px;
  line-height: 1.6;
  color: ${props => (props.theme === 'Light' ? '#616e7c' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 90%;
  }
  @media screen and (min-width: 968px) {
    font-size: 17px;
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    font-size: 19px;
    width: 59%;
  }
`

export const SearchRetryButton = styled.button`
  font-family: 'Roboto';
  align-self: center;
  background-color: #4f46e5;
  font-size: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 32px;
  margin-top: 20px;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
`
