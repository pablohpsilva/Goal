<template lang="html">
  <div class="RegisterModal__wrapper">
    <div class="RegisterModal__header">
      <div class="RegisterModal__title">
        {{ title }}
      </div>
      <div class="RegisterModal__close"
          v-on:click="closemodal">
        <i class="icon-cancel"></i>
      </div>
    </div>
    <div class="RegisterModal__content">
      <input class="RegisterModal__textinput"
          type="text"
          name="name"
          placeholder="Name">
      <input class="RegisterModal__textinput"
          type="text"
          name="name"
          placeholder="Date">
      <input class="RegisterModal__textinput"
          type="text"
          name="name"
          placeholder="Description">
    </div>
    <div class="RegisterModal__footer">
      <input class="Btn__clean--white"
          type="button"
          name="name"
          value="Save">
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    open: {
      type: Boolean,
      default() { return 'false'; },
    },
    title: {
      type: String,
      default() { return 'Add goal'; },
    },
  },
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    closemodal() {
      this.$emit('closemodal');
    },
  },
  mounted() {},
};
</script>

<style lang="stylus">
  @import "../../assets/styles/variables"
  @import "../../assets/styles/mixins"

  +prefix-classes('RegisterModal__')
    .wrapper
      background rgba(61,158,227,1)
      background -moz-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -webkit-gradient(left top, right top, color-stop(0%, rgba(61,158,227,1)), color-stop(100%, rgba(61,84,232,0.7)))
      background -webkit-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -o-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background -ms-linear-gradient(left, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      background linear-gradient(to right, rgba(61,158,227,1) 0%, rgba(61,84,232,0.7) 100%)
      color #fff
      font 400 10px/1em $rubik
      height 100vh
      left 0
      padding 25px 15px 0 15px
      position fixed
      min-height 100%
      min-width 100%
      top 0
      width 100%
      .header
        flex()
        padding-top 5vh
        .title
          flex-basis(90%)
          font-size 1.8em
        .close
          flex-basis(10%)
          font-size 1.5em
          text-align right
      .content
        flex()
        flex-direction(column)
        margin-top 5vh
      .textinput
        background transparent
        border 0 solid transparent
        border-bottom 1px solid #fff
        color #fff
        font 400 1.5em/1em $rubik
        padding 20px 0
        margin 10px 0
        &::placeholder
          color #fff
      .footer
        flex()
  .Btn__clean--white
    margin-top 5vh
    padding 15px 20px
    width 100%
</style>
