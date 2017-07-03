import React, { PureComponent } from 'react'

import Loader from '../Loader'
import './header.css'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.textInput.value = nextProps.city
  }
  handleSubmit(event) {
    this.props.onSubmitCity(this.textInput.value)
    localStorage.setItem('WeatherForecast__city', this.textInput.value)
    event.preventDefault()
  }
  render() {
    const {
      loading,
    } = this.props

    return (
      <header className={loading ? 'header header--loading' : 'header'}>
        {
          loading
            && <Loader />
        }
        <form className="header__form" onSubmit={this.handleSubmit}>
          <input className="header__input" type="text"
            ref={(input) => { this.textInput = input }}
            placeholder="Enter city"
          />
        </form>
      </header>
    )
  }
}

export default Header