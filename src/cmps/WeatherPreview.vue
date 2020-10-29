<template>
  <section class="weather-card">
    <div class="img-container">
      <img :src="day.imageUrl" :alt="day.IconPhrase" />
    </div>
    <div class="weather-info">
      <h2>{{ getDayByDate }}</h2>
      <h4>{{ day.phrase }}</h4>
      <p class="temp-title">
        Temperature Range:
      </p>
      <p v-if="!inCelsius.length" @click="convertToCelsius" class="temp">
        {{ day.temp[0] }}°F ~ {{ day.temp[1] }}°F
      </p>
      <p v-if="inCelsius.length" @click="showFarenheit" class="temp">
        {{inCelsius[0].toFixed(1)}}°C ~ {{inCelsius[1].toFixed(1)}}°C
        
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['day'],
  data() {
    return {
      inCelsius: [],
    };
  },
  mounted() {
  },
  computed: {
    getDayByDate() {
      const arrDay = this.day.date.split('-');
      const dateStr = new Date(
        arrDay[0],
        arrDay[1] - 1,
        arrDay[2].substring(0, 2)
      ).toDateString();
      return dateStr.substring(0, dateStr.length - 5);
    },
  },
  methods: {
    convertToCelsius() {
      this.inCelsius = this.day.temp.map((temp) => (temp-32)*5/9);
    },
    showFarenheit(){
      this.inCelsius=[]
    }
  },
};
</script>

<style lang="scss">
.weather-card {
  color: white;
  margin: 5px;
  .img-container {
    background-color: rgb(241, 241, 241);
    img {
      width: 100%;
    }
  }
  .weather-info {
    background-color: rgb(153, 153, 153);
    height: 200px;
    border-radius: 3px;
    text-align: center;

    .temp-title {
      margin: 0;
      margin-top: 35px;
    }
    .temp {
            cursor: pointer;

      margin: 0;
    }
  }
}
</style>
