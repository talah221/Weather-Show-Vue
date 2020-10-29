<template>
  <div class="main-container navbar">
    <div class="navbar-container">
      <router-link to="/"> <h2>Weather Show</h2></router-link>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/favorites">Favorites</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'Navbar',
    props: [],

    data () {
      return {
      }
    },

}
</script>

<style scoped lang="scss">
.navbar {
  background-color: black;
  margin-bottom: 30px;
}
.navbar-container {
  display: flex;
  background-color: black;
  align-items: center;
  a{
    text-decoration: none;
  }
  h2 {
    color: white;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    li {
      margin-right: 15px;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
</style>
