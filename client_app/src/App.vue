<template>
  <v-app>
    <nav-bar />
    <v-main>
      <CarouselView/>
      <router-view />
    </v-main>
    <foo-ter />
  </v-app>
</template>
<script>
import NavBar from './components/NavBar.vue';
import FooTer from './components/FooTer.vue';
import CarouselView from './components/CarouselView.vue';
export default {
  components: { NavBar, FooTer,CarouselView },
  data: () => ({
    length: 3,
    window: 0,
  }),
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
