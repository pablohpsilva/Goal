<template lang="html">
  <div class="Notification__actions">
    <!-- <navigation></navigation> -->
    oi
  </div>
</template>

<script type="text/babel">
// import Navigation from '../../shared-components/Navigation';
// import Item from './Item';

export default {
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
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('Notification__')
    .actions
      flex()
      flex-justify(space-around)
      padding 5vh 15px
</style>
