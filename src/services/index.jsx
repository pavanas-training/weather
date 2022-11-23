import axios from 'axios';
var result = null;
export const getData = async (city) => {
  const params = {
    q: city,
    APPID: 'a651830ba1ebad98fd2d945a4ba544f6',
    units: 'metric',
  };
  await axios
    .get('http://api.openweathermap.org/data/2.5/weather', { params: params })
    .then((res) => {
      result = res.data;
    })
    .catch((error) => {
      console.log('City not found', error);
    });
  return result;
};
export const getCurrentLocationData = async () => {
  const params = {
    lat: localStorage.getItem('Latitude'),
    lon: localStorage.getItem('Longitude'),
    APPID: 'a651830ba1ebad98fd2d945a4ba544f6',
    units: 'metric',
  };
  await axios
    .get('http://api.openweathermap.org/data/2.5/weather', { params: params })
    .then((res) => {
      result = res.data;
    })
    .catch((error) => {
      console.log('City not found', error);
    });
  return result;
};
export default getData;
