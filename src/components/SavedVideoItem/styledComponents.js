import styled from 'styled-components'

export const SavedVideo = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  margin-top: 14px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    margin: 0px 8px;
    justify-content: flex-start;
    padding-bottom: 60px;
  }
`

export const SavedVideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  @media screen and (min-width: 576px) {
    width: 46%;
    margin-right: 5px;
  }
  @media screen and (min-width: 576px) {
    width: 52%;
    margin-right: 5px;
  }
`

export const SavedVideoDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 16px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 50px;
    padding-top: 0px;
  }
`

export const SavedVideoProfileImg = styled.img`
  width: 50x;
  height: 50px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SavedVideoTitleStatsContainer = styled.div`
  dispaly: flex;
  flex-drection: column;
  margin: 0px 16px 0px 16px;
  @media screen and (min-width: 576px) {
    margin: 0px 0px 0px 10px;
  }
`

export const SavedVideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  line-height: 1.6;
  margin: 0px;
  margin-bottom: 4px;
  font-weight: 400;
  width: 100%;
  color: ${props => (props.theme === 'Light' ? '#000000' : '#ffffff')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
  @media screen and (min-width: 968px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`

export const SavedVideoStatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const SavedVideoChannelName = styled.p`
  font-family: 'Roboto';
  margin: 0px;
  font-weight: 400;
  font-size: 20px;
  color: ${props => (props.theme === 'Light' ? '#7e858e' : '#94a3b8')};
  margin-top: 4px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-top: 2px;
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 968px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`

export const SavedVideoViewsPublishStats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const SavedVideoStats = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;
  @media screen and (min-width: 576px) {
    justify-content: flex-start;
    margin-left: 0px;
    margin-right: 6px;
    margin-top: 6px;
  }
`

export const SavedVideoDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props =>
    props.theme === 'Light' ? '#7e858e' : '#94a3b8'};
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const SavedVideoViewsCount = styled.span`
  font-size: 20px;
  color: #606060;
  margin-left: 18px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'Light' ? '#7e858e' : '#94a3b8')};
  @media screen and (min-width: 576px) {
    margin: 0px;
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px;
    font-size: 11px;
  }
  @media screen and (min-width: 968px) {
    margin: 0px;
    font-size: 12px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0px;
    font-size: 14px;
  }
`

export const SavedVideoPublishDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props =>
    props.theme === 'Light' ? '#7e858e' : '#94a3b8'};
  @media screen and (min-width: 576px) {
    margin-right: 8px;
  }
  @media screen and (min-width: 768px) {
    width: 3px;
    height: 3px;
    margin-right: 4px;
  }
`
