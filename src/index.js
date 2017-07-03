import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import App from './components/App'


const store = configureStore({
  forecast: {
    pressure: 0,
    humidity: 0,
    temp: 0,
  },
  loading: true,
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)