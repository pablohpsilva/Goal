<template lang="html">
  <div class="Item__wrapper">
    <div class="Item__icon">
      <i>icon</i>
    </div>
    <div class="Item__info">
      <span>Worldtrip</span>
      <div class="Item__progressbar"
          v-bind:class="{
            'Item__gray': colorInterval === 'gray',
            'Item__red': colorInterval === 'red',
            'Item__yellow': colorInterval === 'yellow',
            'Item__green': colorInterval === 'green',
          }"></div>
    </div>
    <div class="Item__percentage">
      70%
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 0.0,
    };
  },
  computed: {
    colorInterval() {
      if (this.percentage < 5) {
        return 'gray';
      }
      if (this.percentage >= 5 && this.percentage < 15) {
        return 'red';
      }
      if (this.percentage >= 15 && this.percentage < 65) {
        return 'yellow';
      }
      return 'green';
    },
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('Item__')
    .wrapper
      flex()
      background transparent
      border-bottom: 1px solid rgba($trd-color, 0.6)
      color $trd-color
      font 400 1.5em/1em $rubik
      padding 4vh 25px
      &:hover
        background rgba($trd-color, 0.6);
    .icon
      flex-basis(15%)
      text-align center
    .info
      flex-basis(70%)
      padding 0 15px
    .progressbar
      border-radius 10px
      height 4px
      margin-top 0.5em
      &.gray
        background $trd-color
      &.red
        background $red-color
      &.yellow
        background $yellow-color
      &.green
        background $green-color
      span
        display block
    .percentage
      flex-basis(15%)
      text-align center
      font-weight 200
</style>
