<style lang="stylus">
  @import "../../assets/styles/variables"

  .GoalNotifications
    list-style none
    margin 0
    padding 0

  .GoalNotification
    padding 10px 25px
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
  <ul class="GoalNotifications">
    <li class="GoalNotification">
      <i class="icon-list GoalNotification__Icon"></i>
      <h3 class="GoalNotification__Title">Simple notification</h3>
      <p class="GoalNotification__Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua.
      </p>
    </li>
    <li class="GoalNotification">
      <i class="icon-list GoalNotification__Icon"></i>
      <h3 class="GoalNotification__Title">Simple notification</h3>
      <p class="GoalNotification__Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua.
      </p>
    </li>
    <li class="GoalNotification">
      <i class="icon-list GoalNotification__Icon"></i>
      <h3 class="GoalNotification__Title">Simple notification</h3>
      <p class="GoalNotification__Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore agna aliqua.
      </p>
    </li>
  </ul>
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
