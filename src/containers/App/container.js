import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCity } from '../../actions'
import App from '../../components/App'

const mapStateToProps = (state, props) => {
  return {
    city: state.city,
    forecast: state.forecast,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitCity: bindActionCreators(setCity, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)