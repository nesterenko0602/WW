import React, { PureComponent } from 'react'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      city: this.props.city,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    event.preventDefault()
  }
  render() {
    return (
      <header className="header">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.city} onChange={this.handleChange}/>
        </form>
      </header>
    )
  }
}

export default Header