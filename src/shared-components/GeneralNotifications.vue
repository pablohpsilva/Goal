<style lang="stylus">
  @import "../assets/styles/variables"

  .GeneralNotifications
    background #3D9EE3
    background -webkit-linear-gradient(left, #3D9EE3 0%, #3D54E8 100%)
    background linear-gradient(to right, #3D9EE3 0%, #3D54E8 100%)
    box-shadow 3px 0 50px rgba($primary-color, .1)
    height 100vh
    left 0
    position fixed
    transform translateX(-100%)
    transition transform .3s ease
    top 0
    width calc(100% - 40px)
    max-width 400px
    z-index 1

    &--active
      @extend .GeneralNotifications
      transform translateX(0)
      transition transform .3s ease

      .GeneralNotification__RedIcon
        &::before
          transition opacity .6s ease
          opacity 0

        &::after
          transition opacity .6s ease
          opacity 1

  .GeneralNotifications__List
    list-style none
    margin 0
    padding 0

  .GeneralNotification
    padding 10px 25px
    transition background .3s ease

    &:hover
      background #4DA0E7
      background -webkit-linear-gradient(45deg,  #4DA0E7 0%, #4D61EB 100%)
      background linear-gradient(45deg,  #4DA0E7 0%, #4D61EB 100%)
      transition background .3s ease

  +prefix-classes('GeneralNotification__')
    .Title
      color #FFF
      font 600 19px $rubik
      margin 0

    .Text
      color #FFF
      font 300 14px $rubik

    .Icon
      color #FFF
      font-size 26px

    .MainTitle
      color #FFF
      font 600 33px $rubik
      margin-bottom 25px
      padding-top 45px
      padding-left 25px
      position relative

    .AlertIcon
      color rgba(#FFF, .3)
      font-size 93px
      position absolute
      overflow hidden
      right 0
      top 0
      width 45px

    .RedIcon
      height 50px
      position absolute
      right -25px
      top 55px
      width 50px

      &::before
      &::after
        height 20px
        left calc(50% - 10px)
        position absolute
        top calc(50% - 10px)
        width 20px
        transition opacity .6s ease

      &::before
        background $danger-color
        border-radius 50%
        content ""
        display block
        opacity 1

      &::after
        color $danger-color
        content "x"
        opacity 0
        line-height .5

  @media (min-width: 900px)
    .GeneralNotification__RedIcon
      &::before
      &::after
        height 30px
        left calc(50% - 10px)
        position absolute
        top calc(50% - 10px)
        width 30px
        transition opacity .6s ease
      &::before
        left calc(50% - 15px)
</style>

<template lang="html">
  <div v-bind:class="(getNotificationsBarStatus) ? 'GeneralNotifications--active' : 'GeneralNotifications'">
    <h4 class="GeneralNotification__MainTitle">
      Notifications
      <span class="icon-alert GeneralNotification__AlertIcon"></span>
      <span class="GeneralNotification__RedIcon"
            v-on:click="switchNotificationsBarStatus(!getNotificationsBarStatus)"></span>
    </h4>
    <ul class="GeneralNotifications__List">
      <li class="GeneralNotification"
          v-for="notification in notifications">
        <i class="icon-list GeneralNotification__Icon"></i>
        <h3 class="GeneralNotification__Title">{{ notification.date }}</h3>
        <p class="GeneralNotification__Text">{{ notification.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { notificationsResource } from '../vuex/resources';

export default {
  props: {},
  vuex: {},
  data() {
    return {
      notifications: '',
      getnotifications: notificationsResource(this.$resource),
    };
  },
  computed: {
    ...mapGetters({
      getNotificationsBarStatus: 'getNotificationsBarStatus',
    }),
  },
  watch: {},
  components: {},
  methods: {
    ...mapActions({
      setNotificationsBarStatus: 'setNotificationsBarStatus',
    }),
    getNotifications() {
      this.getnotifications.getGeneralNotifications({ userId: 1 }).then((success) => {
        this.notifications = success.body.notifications;
      });
    },
    switchNotificationsBarStatus(status) {
      this.setNotificationsBarStatus(status);
    },
  },
  mounted() {
    this.getNotifications();
  },
};
</script>
