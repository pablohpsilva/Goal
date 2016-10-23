<template lang="html">
  <div v-show="loading" class="loading">
    <img class="loading_icon" src="../assets/icons/Loading.svg" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="stylus">
  .loading
    background rgba(255, 255, 255, 0.8)
    height 100%
    width 100%
    color #fff
    overflow hidden
    position fixed
    z-index 990
    top 0
  .loading_icon
    top 0
    position absolute
    bottom 0
    left 0
    right 0
    margin auto
</style>
