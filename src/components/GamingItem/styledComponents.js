import styled from 'styled-components'

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 47%;
  @media screen and (min-width: 576px) {
    width: 31%;
  }
`

export const GamingThumbnailUrl = styled.img`
  width: 100%;
  height: auto;
`

export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 14px;
  margin-bottom: 6px;
  color: #313131;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 968px) {
    font-size: 13px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`

export const GamingViews = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 0px;
  line-height: 1.4;
  color: #424242;
  font-weight: 400;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 968px) {
    font-size: 13px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`
