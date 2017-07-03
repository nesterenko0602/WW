import React, { PureComponent } from 'react'

import Loader from '../Loader'
import './header.css'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      city: this.props.city,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState((prevState) => {
      return {
        city: nextProps.city,
      }
    })
  }
  handleChange(event) {
    const value = event.target.value
    this.setState((prevState) => {
      return {
        city: value,
      }
    })
  }
  handleSubmit(event) {
    this.props.onSubmitCity(this.state.city)
    localStorage.setItem('WeatherForecast__city', this.state.city)
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
          <input className="header__input" type="text" value={this.state.city}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}

export default Header