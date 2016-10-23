<style lang="stylus">
  @import "../assets/styles/variables"
  @import "../assets/styles/mixins"

  +prefix-classes('ActionBar__')
    .actions
      flex()
      flex-justify(space-between)
      font-size 4.5em
      list-style none
      margin 15px 0 30px
      padding 0 25px

    .action
      color $trd-color
      cursor pointer
      display block
      position relative
      text-decoration none
      transition color 0.3s ease

      &:hover
      &:active
        color $primary-color
        transition color 0.3s ease

  .active
    color $primary-color
    cursor pointer

  .circle_notification
    background $danger-color
    border-radius 50%
    bottom 0
    color #FFF
    display inline-block
    font-size 13px
    height 14px
    line-height .9
    padding 0
    position absolute
    right 0
    text-align center
    width 14px
</style>

<template lang="html">
  <ul class="ActionBar__actions">
    <li>
      <router-link
        :to="{ name: 'goal', params: { id: 1 }}"
        class="icon-general-goal ActionBar__action"
        v-bind:class="($route.name === 'goal') ? 'active' : ''">
      </router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'goal-notifications', params: { id: 1 }}"
        class="icon-alert ActionBar__action"
        v-bind:class="($route.name === 'goal-notifications') ? 'active' : ''">
      </router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'goal-edit', params: { id: 1 }}"
        class="icon-tool ActionBar__action"
        v-bind:class="($route.name === 'goal-edit') ? 'active' : ''">
        </router-link>
    </li>
  </ul>
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
