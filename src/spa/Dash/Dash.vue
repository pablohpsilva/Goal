<template lang="html">
  <div class="">
    <navigation v-bind:balance="balance"></navigation>
    <transition name="zoom"
        enter-active-class="zoomIn"
        leave-active-class="zoomOut">
      <register-modal v-show="open"
          v-bind:open="open"
          v-bind:title="title"
          v-on:closemodal="closeModal"></register-modal>
    </transition>
    <div class="Dash__actions">
      <button class="Btn__clean--blue"
          type="button"
          name="button"
          v-on:click.stop="openModal('Add goal')">
        Add goal
      </button>
      <button class="Btn__clean--blue"
          type="button"
          name="button"
          v-on:click.stop="openModal('Assign revenue')">
        Assign revenue
      </button>
    </div>
    <div v-if="goalList && goalList.length">
      <item v-for="goal in goalList" v-bind:item="goal"></item>
    </div>
    <div v-else>
      Nope.
    </div>
  </div>
</template>

<script type="text/babel">
import Navigation from '../../shared-components/Navigation';
import Item from './Item';
import RegisterModal from './RegisterModal';

import { goalsResource } from '../../vuex/resources';

export default {
  data() {
    return {
      balance: 12099.50,
      open: false,
      title: 'Add goal',
      goalResource: goalsResource(this.$resource),
      goalList: [],
    };
  },
  computed: {},
  components: {
    Item,
    RegisterModal,
    Navigation,
  },
  methods: {
    closeModal() {
      this.open = false;
    },
    openModal(title) {
      this.title = title;
      this.open = true;
    },
    requestGoalList() {
      const id = 9;
      this.goalResource.getGoals({ id })
        .then((doc) => {
          this.goalList = doc.data.goals;
        })
        .catch(() => {
          this.goalList = [];
        });
    },
  },
  mounted() {
    this.requestGoalList();
  },
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
