import React, { PureComponent } from 'react'

class Forecast extends PureComponent {
  render() {
    const {
      loading,
      forecast,
    } = this.props

    return (
      <section className="forecast">
        {loading ? 'Загрузка' : 'Готово!'}
      </section>
    )
  }
}

export default Forecast