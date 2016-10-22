<template>
  <div>
    <router-view saveScrollPosition="true"
                 history="true"></router-view>
  </div>
</template>

<script type="text/babel">
  export default {
    vuex: {
    },
    data() {
      return {};
    },
    components: {
    },
    methods: {},
  };
</script>

<style lang="stylus" scoped>
  .row-wide
    width: 100%;
</style>
