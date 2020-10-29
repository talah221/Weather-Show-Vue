<template>
  <div class="home">
    <h2>Check any location weather!</h2>
    <form @submit.prevent="searchLoc">
      <label for="search-input">Search Location: </label>
      <input
        id="search-input"
        autocomplete="off"
        type="text"
        placeholder="Enter City/Country"
        v-model="userSearch"
      />

      <img class="searchIcon-onInput"
        src="https://www.flaticon.com/svg/static/icons/svg/660/660029.svg"
        alt=""
      />
      <cities-list-vue
        @checkWeather="checkWeather"
        :cities="optionalCities"
        v-if="optionalCities && optionalCities.length"
      />
    </form>
    <weather-list-vue :currCity="currCity" v-if="currCity" />
  </div>
</template>

<script>
import CitiesListVue from '../cmps/CitiesList.vue';
import WeatherListVue from '../cmps/WeatherList.vue';
import { WeatherService } from '../services/WeatherService';
export default {
  data() {
    return {
      userSearch: '',
      optionalCities: null,
      currCity: '',
    };
  },
  created() {
    const favCities = JSON.parse(localStorage.getItem('favCities'));
    if (favCities && favCities.length) {
      this.currCity = favCities[0];
    }
  },
  components: {
    CitiesListVue,
    WeatherListVue,
  },
  methods: {
    async searchLoc() {
      if (!this.userSearch) return (this.optionalCities = null);
      const results = await WeatherService.getCities(this.userSearch);
      if (!results.length) return;
      this.optionalCities = results;
    },
    async checkWeather(city) {
      try {
        this.currCity = city;
      } catch (err) {
        console.log('got error finding the weather:', err);
      } finally {
        this.optionalCities = null;
        this.userSearch = '';
      }
    },
  },
};
</script>
<style lang="scss">
form {
  #search-input {
    border: 3px solid #00b4cc;
    padding: 10px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: #9dbfaf;
    &:focus{
      color: #9dbfaf;
    }
  }
  .searchIcon-onInput {
    position: relative;
    left: -25px;
    top: 3px;
    width: 15px;
  }
}
</style>
