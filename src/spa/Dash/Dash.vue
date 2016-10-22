<template lang="html">
  <div class="">
    <navigation></navigation>
    <transition name="zoom"
        enter-active-class="zoomIn"
        leave-active-class="zoomOut">
      <register-modal v-show="open" v-bind:open="open" v-on:close-modal="closeModal"></register-modal>
    </transition>
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
import RegisterModal from './RegisterModal';

export default {
  data() {
    return {
      open: true,
    };
  },
  computed: {},
  components: {
    Item,
    RegisterModal,
    Navigation,
  },
  events: {
    closeModal() {
      this.open = false;
    },
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
