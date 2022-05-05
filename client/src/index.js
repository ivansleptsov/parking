import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserStore from './store/UserStore'
import PlaceStore from './store/PlaceStore'

export const Context = createContext(null)

// ReactDOM.render(
// <Context.Provider
//   value={{
//     user: new UserStore(),
//     device: new DeviceStore(),
//   }}
// >
//   <App />
// </Context.Provider>,
//   document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      place: new PlaceStore(),
    }}
  >
    <App />
  </Context.Provider>
)
