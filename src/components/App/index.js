import React, { PureComponent } from 'react'

import Forecast from '../Forecast'
import Header from '../Header'

import './app.css'

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Header city={this.props.city} onSubmitCity={this.props.onSubmitCity} loading={this.props.loading} />
        <Forecast forecast={this.props.forecast} loading={this.props.loading} />
      </div>
    )
  }
}

export default App