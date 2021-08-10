import axios from "axios";
var result = null;
export const getData = async (city) => {
  const params = {
    q: city,
    APPID: "a651830ba1ebad98fd2d945a4ba544f6",
    units: "metric",
  };
  await axios
    .get("http://api.openweathermap.org/data/2.5/weather", { params: params })
    .then((res) => {
      result = res.data;
    })
    .catch((error) => {
      alert("City not found");
    });
  return result;
};
export const getCurrentLocationData = async () => {
  const params = {
    lat: 13.27,
    lon: 74.83,
    APPID: "a651830ba1ebad98fd2d945a4ba544f6",
    units: "metric",
  };
  await axios
    .get("http://api.openweathermap.org/data/2.5/weather", { params: params })
    .then((res) => {
      result = res.data;
    })
    .catch((error) => {
      alert("City not found");
    });
  return result;
};
export default getData;
