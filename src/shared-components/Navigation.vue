<template lang="html">
  <header class="Navigation__wrapper">
    <action-bar></action-bar>
    <div class="Navigation__logo">
      <img src="../assets/grow.svg" alt="" />
    </div>
    <div class="Navigation__balance">
      <p>
        <span class="Navigation__text--gray">My balance</span>
        <span v-bind:class="{
            'Navigation__text--green': positiveBalance,
            'Navigation__text--red': !positiveBalance
          }">
          $ {{ balance }}
        </span>
      </p>
    </div>
  </header>
</template>

<script type="text/babel">
import ActionBar from '../shared-components/ActionBar';

export default {
  props: {
    balance: {
      type: Number,
      default() { return 0.0; },
    },
  },
  data() {
    return {};
  },
  computed: {
    positiveBalance() {
      return this.balance >= 0;
    },
  },
  components: {
    ActionBar,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="stylus">
  @import "../assets/styles/variables"
  @import "../assets/styles/mixins"

  +prefix-classes('Navigation__')
    .wrapper
      flex()
      padding 20px 25px 0px 25px
      font 400 1em/1em Rubik, sans-serif
    .logo
      flex-basis(70%)
      img
        height 2em
        float left
        padding-top 10px
    .balance
      flex-basis(30%)
      p
        text-align right
        span
          display block
          font 400 1.5em/1em $rubik
    .text--gray
      color $trd-color
    .text--green
      color $green-color
    .text--red
      color $red-color
</style>
