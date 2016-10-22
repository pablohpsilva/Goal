<template lang="html">
  <header class="Navigation__wrapper">
    <div class="Navigation__logo">
      <img src="../assets/grow.svg" alt="" />
    </div>
    <div class="Navigation__balance">
      <p>

      </p>
    </div>
  </header>
</template>

<script type="text/babel">
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
  computed: {},
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="stylus">
  @import "../assets/styles/mixins"

  +prefix-classes('Navigation__')
    font 400 1em/1em Rubik, sans-serif;
    .wrapper
      padding 0 20px
      flex()
    .logo
      flex-basis(70%)
      img
        height: 2em;
        float: left;
    .balance
      flex-basis(30%)
</style>
