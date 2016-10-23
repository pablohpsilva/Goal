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
      <input id="name" class="EditGoal__Input" type="text" />

      <label class="EditGoal__Label" for="start_date">Start date</label>
      <input id="start_date" class="EditGoal__Input" type="text" />

      <label class="EditGoal__Label" for="do_date">Do date</label>
      <input id="do_date" class="EditGoal__Input" type="text" />

      <label class="EditGoal__Label" for="description">Description</label>
      <textarea id="description" class="EditGoal__Input"></textarea>

      <div class="EditGoal__SubGoals">
        <button class="EditGoal__SubGoal">Passport</button>
        <button class="EditGoal__SubGoal">Tickets</button>
        <button class="EditGoal__SubGoal">Hotel</button>
      </div>

      <button class="EditGoal__Btn--submit" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
import ActionBar from '../../shared-components/ActionBar';

export default {
  props: {},
  vuex: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  components: {
    ActionBar,
  },
  methods: {},
  mounted() {},
};
</script>
