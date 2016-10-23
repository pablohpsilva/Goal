<template>
  <div id="app">
    <loading v-bind:loading="getLoader"></loading>
    <transition>
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Hello from './shared-components/Hello';
import Loading from './shared-components/Loading';

import { getLoader } from './vuex/getters';

export default {
  name: 'app',
  vuex: {
    getters: {
      getLoader,
    },
  },
  components: {
    Hello,
    Loading,
  },
};
</script>

<style lang="less">
  @import "assets/styles/vendor/vue2-animate/src/vue2-animate.less";
</style>
<style lang="stylus">
@import "./assets/styles/style.styl"

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

body
  margin 0
  font-size 10px
  background url('assets/background.svg') no-repeat center center
  background-size cover
  min-height 100%
  height 100vh
  *
    box-sizing border-box
    &:focus
      outline: none;
</style>
