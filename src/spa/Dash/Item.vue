<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('Item__')
    .wrapper
      background transparent
      border-bottom: 1px solid rgba($trd-color, .2)
      color $trd-color
      flex()
      font 400 1.5em/1em $rubik
      padding 4vh 15px
      text-decoration none

      &:hover
        background rgba($trd-color, .2);

    .icon
      flex-basis(15%)
      font-size 2em
      text-align center

    .info
      flex-basis(70%)
      padding 0 15px

    .progressbar
      border-radius 10px
      height 4px
      margin-top 0.5em
      width 0
      transition all 1.5s ease-in-out

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
      font-weight 200
      text-align center
</style>

<template lang="html">
  <router-link class="Item__wrapper"
      v-bind:to="{ name: 'goal', params: { id: item.goalId }}">
    <div class="Item__icon">
      <i v-bind:class="item.icon"></i>
    </div>
    <div class="Item__info">
      <span>{{ item.name }}</span>
      <div class="Item__progressbar"
          v-bind:class="{
            'Item__gray': colorInterval === 'gray',
            'Item__red': colorInterval === 'red',
            'Item__yellow': colorInterval === 'yellow',
            'Item__green': colorInterval === 'green',
          }"
          v-bind:style="{ 'width': percentage + '%' }"></div>
    </div>
    <div class="Item__percentage">
      {{ percentage }}%
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() { return null; },
    },
  },
  data() {
    return {};
  },
  computed: {
    colorInterval() {
      if (this.percentage < 5) {
        return 'gray';
      }
      if (this.percentage >= 5 && this.percentage < 35) {
        return 'red';
      }
      if (this.percentage >= 35 && this.percentage < 65) {
        return 'yellow';
      }
      return 'green';
    },
    percentage() {
      const item = this.item;
      if (item) {
        return ((item.reservedBalance * 100) / item.value).toFixed(0);
      }
      return 0;
    },
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
