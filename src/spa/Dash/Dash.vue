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
    <item></item>
  </div>
</template>

<script type="text/babel">
import Navigation from '../../shared-components/Navigation';
import Item from './Item';

export default {
  data() {
    return {};
  },
  computed: {},
  components: {
    Item,
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
      flex-justify(space-around)
      padding 5vh 15px
  .Btn__clean--blue
    font-size 1.3em
    width 10em
</style>
