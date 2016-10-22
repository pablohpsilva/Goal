<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <router-view class="view"
                 transition="test"
                 transition-mode="out-in"
                 keep-alive></router-view>
  </div>
</template>

<script>
import Hello from './shared-components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
