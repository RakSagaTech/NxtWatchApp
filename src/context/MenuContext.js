import React from 'react'

const MenuContext = React.createContext({
  activeMenuId: 'HOME',
  updateActiveMenu: () => {},
})

export default MenuContext
