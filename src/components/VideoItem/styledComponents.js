import styled from 'styled-components'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 48.5%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoItemDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 16px;
  padding-bottom: 32px;
  padding-left: 12px;
  padding-right: 12px;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 50px;
  }
`

export const ProfileImg = styled.img`
  width: 40x;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 41px;
    height: 41px;
  }
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 968px) {
    width: 34px;
    height: 34px;
  }
  @media screen and (min-width: 1200px) {
    width: 38px;
    height: 38px;
  }
`

export const TitleStatsContainer = styled.div`
  dispaly: flex;
  flex-drection: column;
  margin: 0px 12px 0px 10px;
  @media screen and (min-width: 576px) {
    margin: 0px 0px 0px 10px;
  }
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.6;
  margin: 0px;
  margin-bottom: 4px;
  font-weight: 400;
  width: 100%;
  color: ${props => (props.theme === 'Light' ? '#181818' : '#ffffff')};
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 8px;
    line-height: 1.4;
  }
  @media screen and (min-width: 968px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin: 0px;
  font-weight: 400;
  font-size: 12px;
  color: ${props => (props.theme === 'Light' ? '#475569' : '#616e7c')};
  margin-top: 4px;
  @media screen and (min-width: 576px) {
    font-size: 13px;
    margin-top: 2px;
  }
  @media screen and (min-width: 768px) {
    font-size: 8px;
  }
  @media screen and (min-width: 968px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`

export const ViewsPublishStats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9px;
  @media screen and (min-width: 576px) {
    justify-content: flex-start;
    margin-left: 0px;
    margin-right: 6px;
    margin-top: 6px;
  }
`

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${props =>
    props.theme === 'Light' ? '#606060' : '#616e7c'};
  marign: 0px 10px 0px 6px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ViewsCount = styled.span`
  font-size: 12px;
  color: #616e7c;
  margin-left: 6px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'Light' ? '#475569' : '#616e7c')};
  @media screen and (min-width: 576px) {
    margin: 0px;
    font-size: 11px;
  }
  @media screen and (min-width: 768px) {
    margin: 0px;
    font-size: 8px;
  }
  @media screen and (min-width: 968px) {
    margin: 0px;
    font-size: 10px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0px;
    font-size: 14px;
  }
`

export const PublishDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  margin: 0px 4px 0px 4px;
  background-color: ${props =>
    props.theme === 'Light' ? '#606060' : '#616e7c'};
  @media screen and (min-width: 576px) {
    margin-right: 8px;
  }
  @media screen and (min-width: 768px) {
    width: 3px;
    height: 3px;
    margin-right: 4px;
  }
`
