import constants from '../constants'

const rootReducer = (state, action) => {
  const {
    SET_CITY,
    FETCH_DATA,
    FETCH_ERROR,
  } = constants

  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
        loading: true,
        fetchError: false,
      }
    case FETCH_DATA:
      return {
        ...state,
        ...action.payload,
        firstLoad: false,
      }
    case FETCH_ERROR:
      return {
        ...state,
        fetchError: true,
        loading: false,
      }
    default:
      return state
  }
}

export default rootReducer