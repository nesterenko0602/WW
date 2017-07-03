import constants from '../constants'

const {
  SET_CITY,
  FETCH_DATA,
  FETCH_ERROR,
} = constants

export const setCity = (city) => dispatch => {
  dispatch({
    type: SET_CITY,
    payload: city,
  })

  const apiUrl = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
  fetch(apiUrl)
    .then(res => res.json())
    .then(res => res.query.results.channel)
    .then(results => {
      // F to C
      const celsiusTemp = Math.round(5.0/9 * (Number(results.item.condition.temp) - 32))
      dispatch({
        type: FETCH_DATA,
        payload: {
          forecast: {
            pressure: results.atmosphere.pressure,
            humidity: results.atmosphere.humidity,
            temp: celsiusTemp,
          },
          city: results.location.city,
          loading: false,
        },
      })
    })
    .catch(() => {
      dispatch({
        type: FETCH_ERROR,
      })
    })
}