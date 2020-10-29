<template>
  <div class="favorite-container">
    <section class="favPlaces" v-if="favCitiesKeys && favCitiesKeys.length">
      <h1>My Favorite Places:</h1>
      <weather-list-vue
        v-for="(cityKey, idx) in favCitiesKeys"
        :key="idx"
        :currCity="cityKey"
      />
    </section>
    <div v-if="!favCitiesKeys.length">
      <h1>You dont have favorite places</h1>
      <router-link to="/"
        >Click here to search for places around the world</router-link
      >
    </div>
  </div>
</template>

<script>
import WeatherListVue from '../cmps/WeatherList.vue';
import { WeatherService } from '../services/WeatherService';
export default {
  data() {
    return {
      favCitiesKeys: [],
    };
  },
  mounted() {
    this.getAllWeathers();
  },
  methods: {
    getAllWeathers() {
      this.favCitiesKeys = JSON.parse(localStorage.getItem('favCities'));
      if(this.favCitiesKeys===null) this.favCitiesKeys=[]
    },
  },
  components: {
    WeatherListVue,
  },
};
</script>

<style lang="scss">
.favorite-container {
  text-align: center;
  .fav-places {
    margin-top: 25px;
  }
}
</style>
