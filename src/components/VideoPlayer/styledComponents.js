import styled from 'styled-components'

export const VideoHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#0f0f0f'};
`

export const VideoSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#0f0f0f'};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'Light' ? '#f9f9f9' : '#0f0f0f'};
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    padding: 30px 24px;
  }
`

export const VideoPlayerContainer = styled.div`
  height: auto;
  aspect-ratio: 16/9;
  width: 100%;
  max-width: 100%;
`

export const VideoPlayerDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  @media screen and (min-width: 768px) {
    padding: 7px 0px;
  }
`

export const VideoPlayerTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    font-size: 7px;
    margin: 0px;
  }
  @media screen and (min-width: 968px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`

export const VideoPlayerStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewsSubscribers = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const VideoPlayerViews = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.theme === 'Light' ? '#64748b' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    font-size: 6px;
    margin: 0px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 11px;
  }
`

export const VideoPlayerPublished = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
`
export const VideoPlayerDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #606060;
  margin: 0px 8px 0px 8px;
  @media screen and (min-width: 768px) {
    margin: 0px 4px 0px 6px;
  }
`

export const VideoPlayerPublish = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.theme === 'Light' ? '#64748b' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    font-size: 6px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 11px;
  }
`

export const LikeDisLikeSave = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  border: none;
  outine: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.theme === 'Light' ? '#616e7c' : '#94a3b8')};
  margin-top: 6px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
  }
`
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 6px;
    height: 6px;
  }
  @media screen and (min-width: 968px) {
    width: 9px;
    height: 9px;
  }
  @media screen and (min-width: 1200px) {
    width: 11px;
    height: 11px;
  }
`

export const ButtonName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0px;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 6px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 11px;
  }
`

export const HorizontalLine = styled.hr`
  border: ${props =>
    props.theme === 'Light' ? '1.5 px solid #000000' : '1.5px solid #94a3b8'};
  width: 100%;
  margin-top: 26px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
    margin-top: 18px;
  }
`

export const ProfileChannel = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`

export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
  @media screen and (min-width: 968px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 1200px) {
    width: 36px;
    height: 36px;
  }
`

export const ChannelSubscriber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 18px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin: 0px;
  font-size: 12px;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    font-size: 6px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 11px;
  }
`

export const Subscriber = styled.p`
  font-family: 'Roboto';
  margin-top: 10px;
  font-size: 12px;
  color: ${props => (props.theme === 'Light' ? '#64748b' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    font-size: 6px;
    margin-top: 5px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 11px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.6;
  color: ${props => (props.theme === 'Light' ? '#616e7c' : '#f1f5f9')};
  @media screen and (min-width: 768px) {
    font-size: 7.5px;
    padding-left: 44px;
    margin-top: 4px;
  }
  @media screen and (min-width: 968px) {
    font-size: 10px;
    padding-left: 48px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
    padding-left: 54px;
  }
  @media screen and (min-width: 1580px) {
    padding-left: 64px;
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

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
