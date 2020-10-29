import axios from 'axios';

export const WeatherService = {
  getCities,
  getWeather,
  getImage,
  getNameByKey
};
const API_KEY = 'QbygCGPnVCTCdDMm9JU2ipKOwnCSPJij&q';

async function getCities(queryStr) {
  const res = await axios.get(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}=${queryStr}`
  );
  // const Cities = res.data.results
  const CitiesToReturn = res.data.map((city, idx) => {
    return {
      name: `${city.LocalizedName}, ${city.Country.LocalizedName}`,
      key: city.Key,
    };
  });

  return CitiesToReturn.splice(0, 5);
}

async function getWeather(cityKey) {
  const res = await axios.get(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&details=true`
  );
  const weatherToReturn = res.data.DailyForecasts.map((day, idx) => {
    const zero = day.Day.Icon < 10 ? '0' : '';
    const imageUrl = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${zero}${day.Day.Icon}-s.png`;
    return {
      phrase: day.Day.IconPhrase,
      imageUrl,
      temp: [day.Temperature.Minimum.Value, day.Temperature.Maximum.Value],
      date: day.Date,
    };
  });
  weatherToReturn.subtitle = res.data.Headline.Text;
  return weatherToReturn;
}

async function getImage(keyword) {
  var prmRes = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=PA3Oow8kvS9lXoH0KnT7yxn2e_FAaKFzROSIXsAdPNE&query=${keyword}`
  );
  return prmRes.data.results[0].urls.regular;
}
async function getNameByKey(cityKey=213225){
  const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/${cityKey}?apikey=${API_KEY}`)
  return `${res.data.LocalizedName},${res.data.Country.ID}`
}