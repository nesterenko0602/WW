import React, { PureComponent } from 'react'

class Forecast extends PureComponent {
  render() {
    const {
      loading,
      fetchError,
      forecast,
    } = this.props

    return (
      <section className="forecast">
        {
          loading
            ? 'Загрузка'
            : 'Готово!'
        }
        { forecast.temp },
        { forecast.humidity },
        { forecast.pressure }
      </section>
    )
  }
}

export default Forecast