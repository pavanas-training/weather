import axios from "axios";
var result = null;
export const getData = async (city) => {
  const params = {
    q: city,
    APPID: "4f67fc981ccc6fc754ea38433271dcc9",
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
    APPID: "4f67fc981ccc6fc754ea38433271dcc9",
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
