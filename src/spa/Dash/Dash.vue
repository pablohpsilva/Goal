<template lang="html">
  <div class="">
    <navigation></navigation>
    <div class="Dash__actions">
      <button class="Btn__clean--blue" type="button" name="button">
        Add goal
      </button>
      <button class="Btn__clean--blue" type="button" name="button">
        Assign revenue
      </button>
    </div>
  </div>
</template>

<script type="text/babel">

import Navigation from '../../shared-components/Navigation';

export default {
  data() {
    return {};
  },
  computed: {},
  components: {
    Navigation,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('Dash__')
    .actions
      flex()
      flex-justify('space-around')
      padding 5vh 25px
  .Btn__clean--blue
    font-size 3em
    width 8.5em
</style>
