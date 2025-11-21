import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'

import {HomeContainer, HomeContent} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeContent>
          <SideBar />
        </HomeContent>
      </HomeContainer>
    )
  }
}

export default Home
