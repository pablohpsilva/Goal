<template lang="html">
  <div class="RegisterModal__wrapper">
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    open: {
      type: Boolean,
      default() { return 'false'; },
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
  +prefix-classes('RegisterModal__')
    .wrapper
      background rgba(61,158,227,1)
      background -moz-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -webkit-gradient(left top, right top, color-stop(0%, rgba(61,158,227,1)), color-stop(100%, rgba(61,84,232,0.7)))
      background -webkit-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -o-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -ms-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background linear-gradient(to right, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      height 100vh
      left 0
      position fixed
      min-height 100%
      min-width 100%
      top 0
      width 100vh
</style>
