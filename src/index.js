import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import App from './containers/App'


const store = configureStore({
  city: '',
  forecast: {
    pressure: 0,
    humidity: 0,
    temp: 0,
  },
  loading: false,
  fetchError: false,
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)