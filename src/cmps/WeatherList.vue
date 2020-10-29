<template>
  <section class="weather-list-container">
    <h3>Weekly Forecast for {{ currCity.name }}</h3>
    <h5>{{ weathers.subtitle }}</h5>
    <div @click="toggleFavorites">
      <img
        v-if="!isFavorite"
        src="https://cdn2.iconfinder.com/data/icons/4web-3/139/favourite-512.png"
        alt=""
      />
      <img
        v-if="isFavorite"
        src="https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-512.png"
        alt=""
      />
    </div>
    <section class="week-container" v-if="weathers.length">
      <weather-preview-vue
        v-for="(day, idx) in weathers"
        :key="idx"
        :day="day"
      />
    </section>
  </section>
</template>

<script>
import { WeatherService } from '../services/WeatherService';
import WeatherPreviewVue from './WeatherPreview.vue';
export default {
  props: ['currCity'],
  data() {
    return {
      isFavorite: false,
      weathers: [],
    };
  },
  async created() {
    const favCities = JSON.parse(localStorage.getItem('favCities'));
    if(favCities&&favCities.find(city=>city.key===this.currCity.key)) this.isFavorite=true;
    this.weathers = await WeatherService.getWeather(this.currCity.key);
  },
  destroyed() {
    this.isFavorite = false;
  },
  methods: {
    async toggleFavorites() {
      if (!localStorage.getItem('favCities')) {
        localStorage.setItem('favCities', JSON.stringify([]));
      }
      const favCities = JSON.parse(localStorage.getItem('favCities'));
      const cityIdx = favCities.findIndex(
        (city) => city.key === this.currCity.key
      );
      if (cityIdx > -1) {
        favCities.splice(cityIdx, 1);
      } else {
        const cityName = await WeatherService.getNameByKey(this.currCity.key);
        favCities.push({ key: this.currCity.key, name: cityName });
      }
      localStorage.setItem('favCities', JSON.stringify(favCities));
      this.isFavorite = !this.isFavorite;
    },
  },
  components: {
    WeatherPreviewVue,
  },
  watch: {
    currCity: function(newVal, oldVal) {
      if (oldVal !== newVal) this.isFavorite = false;
    },
  },
};
</script>

<style lang="scss">
.weather-list-container {
  text-align: center;
  h3 {
    margin-top: 30px;
  }
  img {
    cursor: pointer;
    width: 35px;
  }
  .week-container {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 5px;
  }
}
</style>
