<style lang="stylus">
  @import "../../assets/styles/variables"

  .GoalNotifications
    list-style none
    margin 0
    padding 0

  .GoalNotification
    padding 0 25px
    padding-bottom 10px
    transition background .3s ease

    &:hover
      background-color #F2F1F1
      transition background .3s ease

  +prefix-classes('GoalNotification__')
    .Title
      color $trd-color
      font 600 19px $rubik
      margin 0

    .Text
      color $trd-color
      font 300 14px $rubik

    .Icon
      color $trd-color
      font-size 26px
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

    <ul class="GoalNotifications">
      <li class="GoalNotification"
          v-for="notification in notifications">
        <i class="icon-list GoalNotification__Icon"></i>
        <h3 class="GoalNotification__Title">{{ notification.date }}</h3>
        <p class="GoalNotification__Text">{{ notification.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import ActionBar from '../../shared-components/ActionBar';

import {
  notificationsResource,
 } from '../../vuex/resources';

export default {
  props: {},
  vuex: {},
  data() {
    return {
      notificationsActions: notificationsResource(this.$resource),
      notifications: [],
    };
  },
  computed: {},
  watch: {},
  components: {
    ActionBar,
  },
  methods: {
    requestNotifications() {
      const userId = 1,
        goalId = 24;
      this.notificationsActions.getGoalNotifications({ userId, goalId })
        .then((success) => {
          this.notifications = success.body.notifications;
        });
    },
  },
  mounted() {
    this.requestNotifications();
  },
};
</script>
