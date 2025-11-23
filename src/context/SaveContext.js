import React from 'react'

const SaveContext = React.createContext({
  savedVideosList: [],
  toggleSave: () => {},
  isSaved: false,
})

export default SaveContext
