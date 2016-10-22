<template>
  <div id="app">
    <img src="./assets/logo.png">

    <hello></hello>

    <transition>
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
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

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

.view
  transition all .3s ease
  -o-transition all .3s ease
  -ms-transition all .3s ease
  -moz-transition all .3s ease
  -wekbit-transition all .3s ease

.test-enter, .test-leave
  opacity 0
  transform translate3d(10px, 0, 0)
  -o-transform translate3d(10px, 0, 0)
  -ms-transform translate3d(10px, 0, 0)
  -moz-transform translate3d(10px, 0, 0)
  -webkit-transform translate3d(10px, 0, 0)
</style>
