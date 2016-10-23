<template>
  <div id="app">
    <loading v-bind:loading="getLoader"></loading>
    <general-notifications></general-notifications>
    <transition name="fade"
        enter-active-class="fadeLeftIn"
        leave-active-class="fadeLeftOut">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Hello from './shared-components/Hello';
import Loading from './shared-components/Loading';
import GeneralNotifications from './shared-components/GeneralNotifications';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      getLoader: 'getLoader',
    }),
  },
  components: {
    Hello,
    Loading,
    GeneralNotifications,
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
  margin: 0 auto;
  max-width: 800px;

.test-enter, .test-leave
  opacity 0
  transform translate3d(10px, 0, 0)
  -o-transform translate3d(10px, 0, 0)
  -ms-transform translate3d(10px, 0, 0)
  -moz-transform translate3d(10px, 0, 0)
  -webkit-transform translate3d(10px, 0, 0)

html
  height 100%

body
  margin 0
  font-size 10px
  background url('assets/background.svg') no-repeat center center
  background-size cover
  min-height 100%
  *
    box-sizing border-box
    &:focus
      outline: none;
</style>
