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
