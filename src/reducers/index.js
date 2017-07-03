import constants from '../constants'

const rootReducer = (state, action) => {
  const {
    SET_CITY,
  } = constants

  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
        loading: true,
      }
    default:
      return state
  }
}

export default rootReducer