import React, { PureComponent } from 'react'

import './forecast.css'

class Forecast extends PureComponent {
  componentDidUpdate() {
    const htmlStyles = window.getComputedStyle(document.body)

    document.documentElement.style.setProperty(
      '--bg-color',
      this.props.forecast.temp > 20
        ? htmlStyles.getPropertyValue("--bg-hot")
        : htmlStyles.getPropertyValue("--bg-cold")
    )
  }
  render() {
    const {
      loading,
      fetchError,
      forecast,
      firstLoad,
    } = this.props
    return (
      <section className="forecast">
        { fetchError
          && <div className="forecast__message">Прогноз погоды для этого города не найден :(</div>
        }
        { !loading && !fetchError && !firstLoad
          && <div>
            <div className="forecast__tempWrapper">
              <div className="forecast__temp">{ forecast.temp }</div>
            </div>
            <div className="forecast__metaWrapper">
              <div>
                <span className="forecast__metaLabel">Влажность</span>
                { forecast.humidity }%
              </div>
              <div>
                <span className="forecast__metaLabel">Давление</span>
                { forecast.pressure } мм
              </div>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default Forecast