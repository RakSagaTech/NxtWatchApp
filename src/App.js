import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import MenuContext from './context/MenuContext'

import './App.css'

class App extends Component {
  state = {
    theme: 'Light',
    activeMenuId: 'HOME',
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
    const {theme, activeMenuId} = this.state
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
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
          </Switch>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App
