<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  .EditGoal
    padding 0 30px 30px

  +prefix-classes('EditGoal__')
    .Label
      color $trd-color
      font 600 16px $rubik
      width 100%

    .Input
      color $trd-color
      background none
      border none
      border-bottom 1px $trd-color solid
      border-radius 0
      font 300 16px $rubik
      height 30px
      margin-bottom 30px
      width 100%

      &:focus
        border-bottom-color $primary-color
        outline none

    .SubGoal
      background transparent
      border 1px $trd-color solid
      border-radius 3px
      color $trd-color
      font 600 14px $rubik
      margin-bottom 12px
      padding 10px
      position relative
      width 100%

      &::after
        border-radius 50%
        background-color $danger-color
        color #FFF
        content "x"
        font 400 12px $rubik
        height 15px
        position absolute
        right -7px
        top -7px
        width 15px

      &:last-of-type
        margin-bottom 50px

      &--add
        @extend .EditGoal__SubGoal
        background-color $primary-color
        border-color $primary-color
        color #FFF

        &::after
          display none

    .Btn--submit
      background none
      border 1px $sec-color solid
      border-radius 4px
      color $sec-color
      font 600 16px $rubik
      padding 20px 10px
      width 100%
      transition border, color .3s ease

      &:active
        border-color darken($sec-color, 10%)
        color darken($sec-color, 10%)
        outline none
        transition border, color .3s ease
</style>

<template lang="html">
  <div>
    <div class="Goal__Header">
      <router-link class="Goal__Btn--back"
                   :to="{ name: 'dash' }">
                   <i class="icon-left Goal__Icon--back"></i>
      </router-link>

      <h1 class="Goal__Title">
        <i class="icon-worldtrip"></i>
        New York Trip
      </h1>
    </div>

    <action-bar></action-bar>

    <form class="EditGoal">
      <label class="EditGoal__Label" for="name">Name</label>
      <input id="name" class="EditGoal__Input" v-model="goal.name" type="text" />

      <label class="EditGoal__Label" for="start_date">Start date</label>
      <input id="start_date" class="EditGoal__Input" v-model="goal.startDate" type="text" />

      <label class="EditGoal__Label" for="due_date">Due date</label>
      <input id="due_date" class="EditGoal__Input" v-model="goal.dueDate" type="text" />

      <label class="EditGoal__Label" for="description">Description</label>
      <textarea id="description" class="EditGoal__Input">{{ goal.description }}</textarea>

      <div class="EditGoal__SubGoals">
        <button class="EditGoal__SubGoal"
          v-for="subgoal in subgoals">
          {{ subgoal.name }}
        </button>
        <button class="EditGoal__SubGoal--add"
                v-on:click.stop="openModal('Add subgoal')"
                type="button">
                Add subgoal</button>

        <transition name="zoom"
            enter-active-class="zoomIn"
            leave-active-class="zoomOut">
          <sub-goal-modal v-show="open"
              v-bind:open="open"
              v-bind:title="title"
              v-on:closemodal="closeModal"></sub-goal-modal>
        </transition>
      </div>

      <button class="EditGoal__Btn--submit" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import ActionBar from '../../shared-components/ActionBar';
import SubGoalModal from './SubGoalModal';

import {
  subGoalsResource,
 } from '../../vuex/resources';

export default {
  props: {},
  vuex: {},
  data() {
    return {
      subGoalsResource: subGoalsResource(this.$resource),
      open: false,
      title: 'Add subgoal',
      goal: {},
      subgoals: [],
    };
  },
  computed: {},
  watch: {},
  components: {
    ActionBar,
    SubGoalModal,
  },
  methods: {
    closeModal() {
      this.open = false;
    },
    openModal(title) {
      this.title = title;
      this.open = true;
    },
    requestGoalInfo() {
      const id = 24;
      this.subGoalsResource.getSubGoals({ id })
        .then((success) => {
          this.goal = {
            name: success.data.goalName,
            description: success.data.goalDescription,
            startDate: success.data.startDate,
            dueDate: success.data.dueDate,
          };
          this.subgoals = success.data.subGoals;
        })
        .catch(() => {
          this.setLoader(false);
        });
    },
  },
  mounted() {
    this.requestGoalInfo();
  },
};
</script>
