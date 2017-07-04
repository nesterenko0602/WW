import React, { PureComponent } from 'react'

import Forecast from '../Forecast'
import Header from '../Header'
import Error from '../Error'

import './app.css'

class App extends PureComponent {
  componentDidMount() {
    if (this.props.firstLoad && this.props.city) {
      this.props.onSubmitCity(this.props.city)
    }
  }
  componentDidUpdate() {
    const htmlStyles = window.getComputedStyle(document.body)
    document.documentElement.style.setProperty(
      '--bg-color',
      this.props.forecast.temp >= 20
        ? htmlStyles.getPropertyValue("--bg-hot")
        : htmlStyles.getPropertyValue("--bg-cold")
    )
  }
  render() {
    const {
      city,
      loading,
      firstLoad,
      forecast,
      fetchError,
      onSubmitCity,
    } = this.props

    return (
      <div className="app">
        <Header
          city={city}
          onSubmitCity={onSubmitCity}
          loading={loading}
        />
        { fetchError
            && <Error />
        }
        { !fetchError && !firstLoad && !loading
            && <Forecast forecast={forecast} />
        }
      </div>
    )
  }
}

export default App