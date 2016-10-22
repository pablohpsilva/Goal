<style lang="stylus">
  @import "../assets/styles/variables"

  .GeneralNotifications
    list-style none
    margin 0
    padding 0
    background-color #1b709b

  .GeneralNotification
    padding 10px 25px
    transition background .3s ease

    &:hover
      background-color #3580a6
      transition background .3s ease

  +prefix-classes('GeneralNotification__')
    .Title
      color #fff
      font 600 19px $rubik
      margin 0

    .Text
      color #fff
      font 300 14px $rubik

    .Icon
      color #fff
      font-size 26px

    .MainTitle
      color #fff
      font 600 24px $rubik
      background-color #1b709b
      padding 45px 0 0 25px

    .AlertIcon
      position absolute
      color  #6aa1bd
      font-size  9em
      right  -50px
      top  0px

    .RedIcon
      position absolute
      background #ff3636
      border-radius 100%
      height 10px
      width 10px
      padding 2px 3px 7px 6px
      margin-top -9px
      color #fff
      font-size 0.3em
      right -10px
</style>

<template lang="html">
  <div class="">
    <h4 class="GeneralNotification__MainTitle">Notifications</h4>
    <span class="icon-alert GeneralNotification__AlertIcon"></span>
    <span class="GeneralNotification__RedIcon"></span>
    <ul class="GeneralNotifications">
      <li class="GeneralNotification">
        <i class="icon-list GeneralNotification__Icon"></i>
        <h3 class="GeneralNotification__Title">Simple notification</h3>
        <p class="GeneralNotification__Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua.
        </p>
      </li>
      <li class="GeneralNotification">
        <i class="icon-list GeneralNotification__Icon"></i>
        <h3 class="GeneralNotification__Title">Simple notification</h3>
        <p class="GeneralNotification__Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua.
        </p>
      </li>
      <li class="GeneralNotification">
        <i class="icon-list GeneralNotification__Icon"></i>
        <h3 class="GeneralNotification__Title">Simple notification</h3>
        <p class="GeneralNotification__Text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {},
  vuex: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  components: {},
  methods: {},
  mounted() {},
};
</script>
