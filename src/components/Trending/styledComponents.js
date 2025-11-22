import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: '#f8fafc';
  height: 100vh;
  width: 100vw;
`

export const TrendingContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${props =>
    props.theme === 'Light' ? '#f4f4f4' : '#181818'};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const TrendingTitleVideos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props =>
    props.theme === 'Light' ? '#f4f4f4' : '#181818'};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.theme === 'Light' ? '#f4f4f4' : '#181818'};
  padding: 20px 21px;
  @media screen and (min-width: 576px) {
    padding: 20px 26px;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 48px;
  }
  @media screen and (min-width: 968px) {
    padding: 26px 80px;
  }
  @media screen and (min-width: 1200px) {
    padding: 24px 70px;
  }
`

export const TrendingLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props =>
    props.theme === 'Light' ? '#e2e8f0' : '#000000'};
  padding: 13px;
  color: #ff0000;
  @media screen and (min-width: 768px) {
    padding: 22px;
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 968px) {
    padding: 24px;
    width: 80px;
    height: 80px;
  }
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 21px;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#ffffff')};
  margin-left: 17px;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 968px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`

export const TrendigListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#000000'};
  @media screen and (min-width: 576px) {
    padding: 18px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 968px) {
    padding: 30px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#0f0f0f'};
`

export const TrendingList = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  background-color: transparent;
  @media screen and (min-width: 576px) {
    margin-top: 10px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 0px 10px 20px;
  }
  @media screen and (min-width: 968px) {
    padding: 20px 40px;
  }
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center:
  align-items: center;
  align-self: center;
  height: 100%;
  width: 100%;
  padding: 40px;
`

export const FailureImg = styled.img`
  width: 200px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 968px) {
    width: 300px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  align-self: center;
  margin-top: 30px;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#ffffff')};
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 23px;
  }
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
  @media screen and (min-width: 968px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  width: 100%;
  align-self: center;
  text-align: center;
  margin: 0px;
  line-height: 1.6;
  color: #616e7c;
  @media screen and (min-width: 576px) {
    font-size: 22px;
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
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

export const FailureRetryButton = styled.button`
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
