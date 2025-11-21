import {Component} from 'react'
import Header from '../Header'

import {HomeContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
      </HomeContainer>
    )
  }
}

export default Home
