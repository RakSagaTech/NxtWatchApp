import React from 'react'

const ThemeContext = React.createContext({
  theme: 'Light',
  toggleTheme: () => {},
})

export default ThemeContext
