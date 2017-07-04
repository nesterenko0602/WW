import React, { PureComponent } from 'react'

import './error.css'

class Error extends PureComponent {
  render() {
    return (
      <div className="error__message">Weather forecast for this city was not found :(</div>
    )
  }
}

export default Error