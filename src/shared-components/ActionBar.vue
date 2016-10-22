<template lang="html">
  <div class="">
    <ul class="ActionBar__actions">
      <li class="icon-general-goal ActionBar__action"></li>
      <li class="icon-alert active ActionBar__action"><span class="circle_notification">3</span></li>
      <li class="icon-tool ActionBar__action"></li>
    </ul>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="stylus">
  @import "../assets/styles/variables"
  @import "../assets/styles/mixins"

  +prefix-classes('ActionBar__')
    .actions
      flex()
      flex-justify(space-between)
      padding 5vh
      list-style none
      font-size 4.5em
    .action
      color #b9b9b9
      cursor pointer
      transition color 0.3s ease
      &:hover
        color #51b9e5
        transition color 0.3s ease
  .active
    color #51b9e5
    cursor pointer
  .circle_notification
    position absolute
    background #ff3636
    border-radius 100%
    height 10px
    width 10px
    padding 2px 3px 7px 6px
    margin-top 27px
    display inline-block
    color #fff
    font-size 0.3em
    margin-left -20px
</style>
