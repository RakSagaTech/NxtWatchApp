import styled from 'styled-components'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

export const ProfileImg = styled.img`
  width: 40x;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export const TitleStatsContainer = styled.div`
  dispaly: flex;
  flex-drection: column;
  margin: 0px 10px 0px 10px;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 1.6;
  margin: 0px;
  margin-bottom: 4px;
  font-weight: 400;
  border: 2px solid red;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 6px;
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
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin: 0px;
  font-weight: 400;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 6px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`

export const ViewsStats = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid red;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const ViewsDot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoViews = styled.p`
  font-family: 'Roboto';
  margin: 0px;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 6px;
  }
  @media screen and (min-width: 968px) {
    font-size: 9px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`
