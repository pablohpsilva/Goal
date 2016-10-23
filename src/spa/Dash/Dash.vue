<template lang="html">
  <div class="">
    <navigation v-bind:balance="getUser ? getUser.balance : 0.0"></navigation>
    <transition name="zoom"
        enter-active-class="zoomIn"
        leave-active-class="zoomOut">
      <register-modal v-show="open"
          v-bind:open="open"
          v-bind:title="title"
          v-on:closemodal="closeModal"
          v-on:changeloadingstatus="changeLoadingStatus"
          v-on:updategoalslist="updateGoalList"
          ></register-modal>
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
    <div v-if="getGoals && getGoals.length">
      <item v-for="goal in getGoals" v-bind:item="goal"></item>
    </div>
    <div class="Dash__NoContent"
        v-else>
      Service Unavailable. :(
    </div>
  </div>
</template>

<script type="text/babel">
import { mapGetters, mapActions } from 'vuex';

import Navigation from '../../shared-components/Navigation';
import Item from './Item';
import RegisterModal from './RegisterModal';

import {
  goalsResource,
  loginResource,
 } from '../../vuex/resources';

export default {
  data() {
    return {
      open: false,
      title: 'Add goal',
      goalResource: goalsResource(this.$resource),
      signinResource: loginResource(this.$resource),
      goalList: [],
      user: null,
    };
  },
  computed: {
    ...mapGetters({
      getGoals: 'getGoalCollection',
      getUser: 'getUserObject',
    }),
  },
  components: {
    Item,
    RegisterModal,
    Navigation,
  },
  methods: {
    ...mapActions([
      'setUser',
      'setGoalCollection',
      'setLoader',
    ]),
    closeModal() {
      this.open = false;
    },
    changeLoadingStatus(status) {
      this.setLoader(status);
    },
    openModal(title) {
      this.title = title;
      this.open = true;
    },
    updateGoalList(goals) {
      if (goals.length > this.getGoals.length) {
        this.setGoalCollection(goals);
      }
      return;
    },
    login() {
      const user = {
        user: 'vanhackathon',
        password: 'code',
      };
      this.signinResource.login(user)
        .then((doc) => {
          this.user = doc.data;
          this.setUser(doc.data);
        });
    },
    requestGoalList() {
      const id = 9;
      this.setLoader(true);
      this.goalResource.getGoals({ id })
        .then((doc) => {
          this.setLoader(false);
          this.updateGoalList(doc.data.goals);
        })
        .catch(() => {
          this.goalList = [];
          this.setLoader(false);
        });
    },
  },
  mounted() {
    this.login();
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
    .NoContent
      font 400 2em/1em $rubik
      text-align center
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
