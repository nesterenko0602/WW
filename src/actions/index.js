import constants from '../constants'

const {
  SET_CITY,
} = constants

export const setCity = (props) => dispatch => {
  dispatch({
    type: SET_CITY,
    payload: props,
  })
}