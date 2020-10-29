<template>
  <ul>
    <li @click="onCheckWeather(city)" v-for="(city, idx) in cities" :key="idx">
      <img
        class="search-icon"
        src="https://www.flaticon.com/svg/static/icons/svg/660/660029.svg"
        alt=""
      />
      <span> {{ city.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  created() {},
  methods: {
    onCheckWeather(city) {
      this.$emit('checkWeather', city);
    },
  },
  props: ['cities'],
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  position: relative;
  li {
    cursor: pointer;
    list-style: none;
    margin-bottom: 4px;
    &:hover {
      transition: 0.5s;
      background-color: rgb(168, 166, 166);
    }
    // display: flex;
    // flex-direction: column;
    .search-icon {
      width: 20px;
    }
  }
}
</style>
