import React, { PureComponent } from 'react'

import './forecast.css'

class Forecast extends PureComponent {
  render() {
    const {
      forecast,
    } = this.props

    return (
      <section className="forecast">
        <div className="forecast__tempWrapper">
          <div className="forecast__temp">{ forecast.temp }</div>
        </div>
        <div className="forecast__metaWrapper">
          <div>
            <span className="forecast__metaLabel">Humidity</span>
            { forecast.humidity }%
          </div>
          <div>
            <span className="forecast__metaLabel">Pressure</span>
            { forecast.pressure } mm
          </div>
        </div>
      </section>
    )
  }
}

export default Forecast