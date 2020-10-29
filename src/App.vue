<template>
  <main>
    <div class="app">
      <Navbar />
      <section class="main-container">
        <router-view></router-view>
      </section>
    </div>
    <Footer />
  </main>
</template>

<script>
import Footer from './cmps/Footer';
import Navbar from './cmps/Navbar';
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" >
.app{
  height: 100vh;
}
</style>
