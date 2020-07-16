import {GET_DATA,IP} from './types'
import axios from 'axios'

export const getWeatherInfo = (city) => dispatch =>{
    axios.get(IP + 'getWeatherInfo/' + city)
     .then(res => {
         dispatch({
             type: GET_DATA,
             payload: JSON.parse(res.data.body)
         })
     })
     .catch(err => console.log(err))
 };