import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoPlayer from './components/VideoPlayer'
import SavedVideos from './components/SavedVideos'

import ThemeContext from './context/ThemeContext'
import MenuContext from './context/MenuContext'
import SaveContext from './context/SaveContext'

import './App.css'

class App extends Component {
  state = {
    theme: 'Light',
    activeMenuId: 'HOME',
    savedVideosList: [],
    isSaved: false,
  }

  toggleSave = video => {
    const {savedVideosList, isSaved} = this.state
    const isVideoPresent = savedVideosList.find(
      eachVideo => eachVideo.id === video.id,
    )

    let updatedVideosList

    if (isVideoPresent) {
      updatedVideosList = savedVideosList.filter(
        eachVideo => eachVideo.id !== video.id,
      )
    } else {
      updatedVideosList = [...savedVideosList, video]
    }
    this.setState({
      savedVideosList: updatedVideosList,
      isSaved: !isSaved,
    })
  }

  updateActiveMenu = id => {
    this.setState({
      activeMenuId: id,
    })
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'Light' ? 'Dark' : 'Light',
    }))
  }

  render() {
    const {theme, activeMenuId, savedVideosList, isSaved} = this.state
    console.log(savedVideosList)
    return (
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: this.toggleTheme,
        }}
      >
        <MenuContext.Provider
          value={{activeMenuId, changeMenu: this.updateActiveMenu}}
        >
          <SaveContext.Provider
            value={{
              savedVideosList,
              isSaved,
              handleSave: this.toggleSave,
            }}
          >
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/" component={Home} />
              <Route exact path="/videos/:id" component={VideoPlayer} />
              <Route exact path="/trending" component={Trending} />
              <Route exact path="/gaming" component={Gaming} />
              <Route exact path="/saved-videos" component={SavedVideos} />
            </Switch>
          </SaveContext.Provider>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
