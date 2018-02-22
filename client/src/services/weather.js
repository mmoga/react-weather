import axios from 'axios';


export const getWeather = (latitude, longitude) => {
    const url =`/forecast/${latitude},${latitude}`;
    return axios.get(url);
}